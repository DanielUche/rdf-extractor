const uuid = require('uuid');
const { promises: fs } = require('fs');
const path = require('path');
const xml2js = require('xml2js');

const Author = require('./db/models/authors');
const Book = require('./db/models/books');
const Ingested = require('./db/models/ingested');
const Logger = require('./util/logger');

const { resolve } = path;

const parseRDF = async (file) => {
  const rdfTitle = await fs.readFile(file, 'utf8');
  const parser = new xml2js.Parser();
  const result = await parser.parseStringPromise(rdfTitle);
  return result;
};

const getAuthor = (author) => {
  const {
    'pgterms:deathdate': deathdate,
    'pgterms:name': name,
    'pgterms:birthdate': birthday
  } = author;

  return {
    name: name ? name[0] : '',
    death_year: deathdate ? deathdate[0]._ : '',
    birth_year: birthday ? birthday[0]._ : ''
  };
};

const getIngestedData = async () => {
  const ingested = await Ingested.findAll({ raw: true });
  return ingested;
};

const extractRdfData = async (data) => {
  let {
    'dcterms:subject': subjects,
    'dcterms:rights': rights,
    'dcterms:issued': publicationDate,
    'dcterms:title': title, 'dcterms:publisher': publisher,
    'dcterms:creator': authors, 'dcterms:language': language
  } = data['rdf:RDF']['pgterms:ebook'][0];

  subjects = subjects || [];
  rights = rights ? rights[0] : '';
  publicationDate = publicationDate ? publicationDate[0]._ : '';
  title = title ? title[0] : '';
  publisher = publisher ? publisher[0] : '';
  authors = authors ? authors[0]['pgterms:agent'] : [];
  language = language ? language[0]['rdf:Description'][0]['rdf:value'][0]._ : '';

  const subjectArray = [];
  subjects.forEach((sub) => {
    subjectArray.push(sub['rdf:Description'][0]['rdf:value'][0]);
  });

  if (!authors || authors.length === 0) {
    authors = [];
  }
  return {
    subjects,
    rights,
    authors,
    publicationDate,
    publisher,
    language,
    title
  };
};

let fetchedAuthors = false;
let authorMap;
const getPublishedAuthorNames = async () => {
  const authors = await Author.findAll({ attributes: ['name'], raw: true });
  fetchedAuthors = true;
  authorMap = new Set(authors.map((author) => author.name));
  return 0;
};

let bookArr = [];
let authorsArr = [];
let ingestedArr = [];
const writeToDB = async (record, folder) => {
  const {
    authors, publisher,
    title, rights,
    subjectArray,
    publicationDate, language
  } = record;
  const authorsId = [];

  if (!fetchedAuthors) {
    await getPublishedAuthorNames(); // Only Make database call when set is empty
  }

  for (let i = 0; i < authors.length; i += 1) {
    const author = getAuthor(authors[i]);
    author.a_id = uuid.v4();
    if (!authorMap.has(author.name)) {
      authorMap.add(author.name);
      authorsArr.push(author);
      authorsId.push(author.a_id);
    }
    // let authCreated = await Author.
    // findOrCreate({ where: { name: author.name }, defults: author });
    // authCreated = await authCreated[0].get({ plain: true });
    // authorsId.push(authCreated.id);
  }

  bookArr.push({
    publisher,
    language,
    title,
    licence: rights,
    subjects: subjectArray,
    authors_id: authorsId,
    publication_date: publicationDate
  });

  ingestedArr.push({ record: folder });

  if (bookArr.length === 1000) {
    // Bulk write to database 1000 records
    await Author.bulkCreate(authorsArr);
    await Book.bulkCreate(bookArr);
    await Ingested.bulkCreate(ingestedArr);
    bookArr = []; ingestedArr = []; authorsArr = [];
  }

  // await Book.create({
  // publisher,
  // language,
  // title,
  // licence: rights,
  // subjects: subjectArray,
  // authors_id: authorsId,
  // publication_date: publicationDate
  // });
  // await Ingested.create({
  //   record: folder
  // });
  return true;
};

const dropIngestedData = async () => {
  const deleted = Ingested.destroy({
    where: {},
    truncate: true
  });
  return deleted;
};

const fileReader = async () => {
  const ingestedRecords = await getIngestedData();
  const folderArg = process.argv;
  if (folderArg.length < 3) {
    Logger.error('Usage: node index.js <foldername>');
    return 0;
  }
  const baseDir = resolve(`${folderArg[2]}/epub`);
  try {
    Logger.info('RDF Ingesting started..........');
    const folders = await fs.readdir(`${baseDir}`);
    for (const folder of folders) {
      const isDir = await fs.lstat(`${baseDir}/${folder}`);
      if (isDir.isDirectory()) {
        if (!ingestedRecords[folder]) { // Only ingest if record not already ingested
          const rdfFolder = await fs.readdir(`${baseDir}/${folder}`);
          for (const files of rdfFolder) {
            const parsedRDF = await parseRDF(`${baseDir}/${folder}/${files}`);
            const extrctedData = await extractRdfData(parsedRDF);
            await writeToDB(extrctedData, folder);
          }
        }
      }
    }
    // Bulk write to database 1000 or less records
    if (authorsArr.length) await Author.bulkCreate(authorsArr);
    if (bookArr.length) await Book.bulkCreate(bookArr);
    await dropIngestedData(); // Clear Ingest table when all record is ingestesd
  }
  catch (error) {
    Logger.error(error);
  }
  Logger.info('RDF Ingesting ended..........');
  return 0;
};

module.exports = {
  fileReader,
  getAuthor,
  getIngestedData,
  extractRdfData,
  writeToDB,
  parseRDF,
  dropIngestedData,
  getPublishedAuthorNames
};
