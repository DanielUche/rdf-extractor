/* eslint-disable no-undef */
const { assert, expect } = require('chai');
const { resolve } = require('path');
const sinon = require('sinon');

const Util = require('../file-extractor');
const { parsedData, extractedData, author: authorData } = require('./mock');
const Logger = require('../util/logger');

process.argv[0] = '';
process.argv[1] = '';
process.argv[2] = './test/data';

describe('Test Extractor Utility', () => {
  sinon.stub(Logger, 'error').returns('');
  sinon.stub(Logger, 'info').returns('');

  it('Should return empty author when author not found in RDF file', async () => {
    const temp = { ...parsedData };
    delete temp['rdf:RDF']['pgterms:ebook'][0]['dcterms:creator'];
    const extracted = await Util.extractRdfData(temp);
    expect(extracted).to.have.property('authorsId');
  });

  it('Should successfully Read RDF files and save to database', async () => {
    sinon.stub(Util, 'parseRDF').returns(parsedData);
    sinon.stub(Util, 'extractRdfData').returns(extractedData);
    sinon.stub(Util, 'writeToDB').returns(true);
    sinon.stub(Util, 'dropIngestedData').returns([]);
    const reader = await Util.fileReader();
    expect(reader).to.be.a('number');
  });

  it('Should successfully Drop injested data', async () => {
    const deleted = await Util.dropIngestedData();
    expect(deleted).to.deep.equal([]);
  });

  it('Should throw error when file path is invalid', async () => {
    process.argv[2] = './wrong-file-path/data';
    const reader = await Util.fileReader();
    expect(reader).to.be.a('number');
  });

  it('Should successfully Parser RDF', async () => {
    const rdf = await Util.parseRDF(resolve('./test/data/epub/1/pg1.rdf'));
    expect(rdf).to.deep.equal(parsedData);
    expect(rdf).to.have.property('rdf:RDF');
  });

  it('Should successfully Extract RDF', async () => {
    const extracted = await Util.extractRdfData(parsedData);
    expect(extracted).to.deep.equal(extractedData);
    expect(extracted).to.have.property('authorsId');
  });

  it('Should return Author\'s', () => {
    const author = Util.getAuthor(authorData);
    expect(author).to.have.property('name');
    expect(author).to.have.property('death_year');
    expect(author).to.have.property('birth_year');
  });

  it('Should fetch all ingested data', async () => {
    const data = await Util.getIngestedData();
    assert.typeOf(data, 'array');
  });

  it('Successfully writes RDF data to database', async () => {
    await Util.writeToDB();
  });

  it('Should return successfully if command line arg less than 3', async () => {
    process.argv = [];
    const reader = await Util.fileReader();
    expect(reader).to.equal(0);
  });
});
