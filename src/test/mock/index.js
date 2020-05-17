
const extractedData = {
  subjects: [{
    'rdf:Description': [{
      $: { 'rdf:nodeID': 'N12dde79f877248aaab4b7f4f4972905d' },
      'rdf:value': ['United States. Declaration of Independence'],
      'dcam:memberOf': [{
        $: {
          'rdf:resource': 'http://purl.org/dc/terms/LCSH'
        }
      }]
    }]
  }, {
    'rdf:Description': [{
      $: { 'rdf:nodeID': 'N42bdbe849d334e73b393dc49713798f2' },
      'dcam:memberOf': [{ $: { 'rdf:resource': 'http://purl.org/dc/terms/LCSH' } }],
      'rdf:value': ['United States -- History -- Revolution, 1775-1783 -- Sources']
    }]
  }, { 'rdf:Description': [{ $: { 'rdf:nodeID': 'Nf447071ea929451abda36125b832df2d' }, 'dcam:memberOf': [{ $: { 'rdf:resource': 'http://purl.org/dc/terms/LCC' } }], 'rdf:value': ['E201'] }] }, { 'rdf:Description': [{ $: { 'rdf:nodeID': 'N9cb41ce27fc64807b58e4adea82caa0e' }, 'dcam:memberOf': [{ $: { 'rdf:resource': 'http://purl.org/dc/terms/LCC' } }], 'rdf:value': ['JK'] }] }],
  rights: 'Public domain in the USA.',
  authors: [{
    $: { 'rdf:about': '2009/agents/1638' }, 'pgterms:webpage': [{ $: { 'rdf:resource': 'http://en.wikipedia.org/wiki/Thomas_Jefferson' } }], 'pgterms:deathdate': [{ _: '1826', $: { 'rdf:datatype': 'http://www.w3.org/2001/XMLSchema#integer' } }], 'pgterms:name': ['Jefferson, Thomas'], 'pgterms:birthdate': [{ _: '1743', $: { 'rdf:datatype': 'http://www.w3.org/2001/XMLSchema#integer' } }], 'pgterms:alias': ['United States President (1801-1809)']
  }],
  publicationDate: '1971-12-01',
  publisher: 'Project Gutenberg',
  language: 'en',
  title: 'The Declaration of Independence of the United States of America',
  authorsId: []
};

const parsedData = {
  'rdf:RDF': {
    $: {
      'xml:base': 'http://www.gutenberg.org/', 'xmlns:rdfs': 'http://www.w3.org/2000/01/rdf-schema#', 'xmlns:cc': 'http://web.resource.org/cc/', 'xmlns:dcam': 'http://purl.org/dc/dcam/', 'xmlns:rdf': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#', 'xmlns:dcterms': 'http://purl.org/dc/terms/', 'xmlns:pgterms': 'http://www.gutenberg.org/2009/pgterms/'
    },
    'pgterms:ebook': [{
      $:
{ 'rdf:about': 'ebooks/1' },
      'dcterms:subject': [{ 'rdf:Description': [{ $: { 'rdf:nodeID': 'N12dde79f877248aaab4b7f4f4972905d' }, 'rdf:value': ['United States. Declaration of Independence'], 'dcam:memberOf': [{ $: { 'rdf:resource': 'http://purl.org/dc/terms/LCSH' } }] }] }, { 'rdf:Description': [{ $: { 'rdf:nodeID': 'N42bdbe849d334e73b393dc49713798f2' }, 'dcam:memberOf': [{ $: { 'rdf:resource': 'http://purl.org/dc/terms/LCSH' } }], 'rdf:value': ['United States -- History -- Revolution, 1775-1783 -- Sources'] }] }, {
        'rdf:Description': [{
          $: { 'rdf:nodeID': 'Nf447071ea929451abda36125b832df2d' },
          'dcam:memberOf': [{ $: { 'rdf:resource': 'http://purl.org/dc/terms/LCC' } }],
          'rdf:value': ['E201']
        }]
      }, { 'rdf:Description': [{ $: { 'rdf:nodeID': 'N9cb41ce27fc64807b58e4adea82caa0e' }, 'dcam:memberOf': [{ $: { 'rdf:resource': 'http://purl.org/dc/terms/LCC' } }], 'rdf:value': ['JK'] }] }],
      'dcterms:hasFormat': [{
        'pgterms:file': [{
          $: { 'rdf:about': 'http://www.gutenberg.org/ebooks/1.txt.utf-8' },
          'dcterms:extent': [{ _: '120944', $: { 'rdf:datatype': 'http://www.w3.org/2001/XMLSchema#integer' } }],
          'dcterms:modified': [{ _: '2020-05-01T03:30:04.018342', $: { 'rdf:datatype': 'http://www.w3.org/2001/XMLSchema#dateTime' } }],
          'dcterms:format': [{ 'rdf:Description': [{ $: { 'rdf:nodeID': 'N0ad7a69dbbde44a997ddf912323e8d68' }, 'rdf:value': [{ _: 'text/plain', $: { 'rdf:datatype': 'http://purl.org/dc/terms/IMT' } }], 'dcam:memberOf': [{ $: { 'rdf:resource': 'http://purl.org/dc/terms/IMT' } }] }] }],
          'dcterms:isFormatOf': [{ $: { 'rdf:resource': 'ebooks/1' } }]
        }]
      }, {
        'pgterms:file': [{
          $: { 'rdf:about': 'http://www.gutenberg.org/ebooks/1.epub.images' },
          'dcterms:extent': [{ _: '1043871', $: { 'rdf:datatype': 'http://www.w3.org/2001/XMLSchema#integer' } }],
          'dcterms:isFormatOf': [{
            $:
{ 'rdf:resource': 'ebooks/1' }
          }],
          'dcterms:format': [{ 'rdf:Description': [{ $: { 'rdf:nodeID': 'Nef883eda29ec42c8a6a748ce5553fe11' }, 'rdf:value': [{ _: 'application/epub+zip', $: { 'rdf:datatype': 'http://purl.org/dc/terms/IMT' } }], 'dcam:memberOf': [{ $: { 'rdf:resource': 'http://purl.org/dc/terms/IMT' } }] }] }],
          'dcterms:modified': [{ _: '2020-05-01T03:30:05.751328', $: { 'rdf:datatype': 'http://www.w3.org/2001/XMLSchema#dateTime' } }]
        }]
      }, {
        'pgterms:file': [{
          $: { 'rdf:about': 'http://www.gutenberg.org/files/1/1-h/1-h.htm' }, 'dcterms:extent': [{ _: '131866', $: { 'rdf:datatype': 'http://www.w3.org/2001/XMLSchema#integer' } }], 'dcterms:isFormatOf': [{ $: { 'rdf:resource': 'ebooks/1' } }], 'dcterms:modified': [{ _: '2018-08-11T14:05:44', $: { 'rdf:datatype': 'http://www.w3.org/2001/XMLSchema#dateTime' } }], 'dcterms:format': [{ 'rdf:Description': [{ $: { 'rdf:nodeID': 'Nba8d91510af645ea9cba40ab80f3a073' }, 'dcam:memberOf': [{ $: { 'rdf:resource': 'http://purl.org/dc/terms/IMT' } }], 'rdf:value': [{ _: 'text/html', $: { 'rdf:datatype': 'http://purl.org/dc/terms/IMT' } }] }] }]
        }]
      }, {
        'pgterms:file': [{
          $: { 'rdf:about': 'http://www.gutenberg.org/files/1/1-0.zip' }, 'dcterms:extent': [{ _: '45685', $: { 'rdf:datatype': 'http://www.w3.org/2001/XMLSchema#integer' } }], 'dcterms:format': [{ 'rdf:Description': [{ $: { 'rdf:nodeID': 'Nac74613fc9a24e7a9d0f6d5405d68239' }, 'rdf:value': [{ _: 'text/plain; charset=us-ascii', $: { 'rdf:datatype': 'http://purl.org/dc/terms/IMT' } }], 'dcam:memberOf': [{ $: { 'rdf:resource': 'http://purl.org/dc/terms/IMT' } }] }] }, { 'rdf:Description': [{ $: { 'rdf:nodeID': 'Nddbb71dad1564ddbbac3926b7ada6a12' }, 'dcam:memberOf': [{ $: { 'rdf:resource': 'http://purl.org/dc/terms/IMT' } }], 'rdf:value': [{ _: 'application/zip', $: { 'rdf:datatype': 'http://purl.org/dc/terms/IMT' } }] }] }], 'dcterms:modified': [{ _: '2018-08-11T14:06:48', $: { 'rdf:datatype': 'http://www.w3.org/2001/XMLSchema#dateTime' } }], 'dcterms:isFormatOf': [{ $: { 'rdf:resource': 'ebooks/1' } }]
        }]
      }, {
        'pgterms:file': [{
          $: { 'rdf:about': 'http://www.gutenberg.org/ebooks/1.kindle.noimages' }, 'dcterms:format': [{ 'rdf:Description': [{ $: { 'rdf:nodeID': 'N1308bc6e5a234178a30a67e4365a0f7e' }, 'dcam:memberOf': [{ $: { 'rdf:resource': 'http://purl.org/dc/terms/IMT' } }], 'rdf:value': [{ _: 'application/x-mobipocket-ebook', $: { 'rdf:datatype': 'http://purl.org/dc/terms/IMT' } }] }] }], 'dcterms:modified': [{ _: '2020-05-01T03:30:07.296294', $: { 'rdf:datatype': 'http://www.w3.org/2001/XMLSchema#dateTime' } }], 'dcterms:isFormatOf': [{ $: { 'rdf:resource': 'ebooks/1' } }], 'dcterms:extent': [{ _: '309052', $: { 'rdf:datatype': 'http://www.w3.org/2001/XMLSchema#integer' } }]
        }]
      }, {
        'pgterms:file': [{
          $: { 'rdf:about': 'http://www.gutenberg.org/ebooks/1.rdf' }, 'dcterms:modified': [{ _: '2020-05-07T05:00:04.971076', $: { 'rdf:datatype': 'http://www.w3.org/2001/XMLSchema#dateTime' } }], 'dcterms:format': [{ 'rdf:Description': [{ $: { 'rdf:nodeID': 'N3e14bab42aa04570b663ceaa0604cc05' }, 'rdf:value': [{ _: 'application/rdf+xml', $: { 'rdf:datatype': 'http://purl.org/dc/terms/IMT' } }], 'dcam:memberOf': [{ $: { 'rdf:resource': 'http://purl.org/dc/terms/IMT' } }] }] }], 'dcterms:extent': [{ _: '14203', $: { 'rdf:datatype': 'http://www.w3.org/2001/XMLSchema#integer' } }], 'dcterms:isFormatOf': [{ $: { 'rdf:resource': 'ebooks/1' } }]
        }]
      }, {
        'pgterms:file': [{
          $: { 'rdf:about': 'http://www.gutenberg.org/ebooks/1.epub.noimages' }, 'dcterms:isFormatOf': [{ $: { 'rdf:resource': 'ebooks/1' } }], 'dcterms:extent': [{ _: '74756', $: { 'rdf:datatype': 'http://www.w3.org/2001/XMLSchema#integer' } }], 'dcterms:format': [{ 'rdf:Description': [{ $: { 'rdf:nodeID': 'N6fd7ab58831143e083babe6b5b9ea584' }, 'rdf:value': [{ _: 'application/epub+zip', $: { 'rdf:datatype': 'http://purl.org/dc/terms/IMT' } }], 'dcam:memberOf': [{ $: { 'rdf:resource': 'http://purl.org/dc/terms/IMT' } }] }] }], 'dcterms:modified': [{ _: '2020-05-01T03:30:05.949320', $: { 'rdf:datatype': 'http://www.w3.org/2001/XMLSchema#dateTime' } }]
        }]
      }, {
        'pgterms:file': [{
          $: { 'rdf:about': 'http://www.gutenberg.org/cache/epub/1/pg1.cover.small.jpg' }, 'dcterms:extent': [{ _: '4618', $: { 'rdf:datatype': 'http://www.w3.org/2001/XMLSchema#integer' } }], 'dcterms:isFormatOf': [{ $: { 'rdf:resource': 'ebooks/1' } }], 'dcterms:modified': [{ _: '2020-05-01T03:30:07.326303', $: { 'rdf:datatype': 'http://www.w3.org/2001/XMLSchema#dateTime' } }], 'dcterms:format': [{ 'rdf:Description': [{ $: { 'rdf:nodeID': 'Nc565cce3822446ef95ced673ba320ef6' }, 'dcam:memberOf': [{ $: { 'rdf:resource': 'http://purl.org/dc/terms/IMT' } }], 'rdf:value': [{ _: 'image/jpeg', $: { 'rdf:datatype': 'http://purl.org/dc/terms/IMT' } }] }] }]
        }]
      }, {
        'pgterms:file': [{
          $: { 'rdf:about': 'http://www.gutenberg.org/files/1/1-0.txt' }, 'dcterms:extent': [{ _: '120941', $: { 'rdf:datatype': 'http://www.w3.org/2001/XMLSchema#integer' } }], 'dcterms:isFormatOf': [{ $: { 'rdf:resource': 'ebooks/1' } }], 'dcterms:modified': [{ _: '2018-08-11T13:55:58', $: { 'rdf:datatype': 'http://www.w3.org/2001/XMLSchema#dateTime' } }], 'dcterms:format': [{ 'rdf:Description': [{ $: { 'rdf:nodeID': 'N02c552dede1042d0b54226ae63e488da' }, 'rdf:value': [{ _: 'text/plain; charset=us-ascii', $: { 'rdf:datatype': 'http://purl.org/dc/terms/IMT' } }], 'dcam:memberOf': [{ $: { 'rdf:resource': 'http://purl.org/dc/terms/IMT' } }] }] }]
        }]
      }, {
        'pgterms:file': [{
          $: { 'rdf:about': 'http://www.gutenberg.org/cache/epub/1/pg1.cover.medium.jpg' }, 'dcterms:extent': [{ _: '23768', $: { 'rdf:datatype': 'http://www.w3.org/2001/XMLSchema#integer' } }], 'dcterms:isFormatOf': [{ $: { 'rdf:resource': 'ebooks/1' } }], 'dcterms:modified': [{ _: '2020-05-01T03:30:07.354304', $: { 'rdf:datatype': 'http://www.w3.org/2001/XMLSchema#dateTime' } }], 'dcterms:format': [{ 'rdf:Description': [{ $: { 'rdf:nodeID': 'N5b269884624c46fbadcde761c7e5b3c4' }, 'rdf:value': [{ _: 'image/jpeg', $: { 'rdf:datatype': 'http://purl.org/dc/terms/IMT' } }], 'dcam:memberOf': [{ $: { 'rdf:resource': 'http://purl.org/dc/terms/IMT' } }] }] }]
        }]
      }, {
        'pgterms:file': [{
          $: { 'rdf:about': 'http://www.gutenberg.org/files/1/1-h.zip' }, 'dcterms:extent': [{ _: '2189095', $: { 'rdf:datatype': 'http://www.w3.org/2001/XMLSchema#integer' } }], 'dcterms:format': [{ 'rdf:Description': [{ $: { 'rdf:nodeID': 'Nedf3de171da5463c907cb5fd65b10983' }, 'rdf:value': [{ _: 'application/zip', $: { 'rdf:datatype': 'http://purl.org/dc/terms/IMT' } }], 'dcam:memberOf': [{ $: { 'rdf:resource': 'http://purl.org/dc/terms/IMT' } }] }] }, { 'rdf:Description': [{ $: { 'rdf:nodeID': 'Na4d85adce347406baae9e676360bb881' }, 'rdf:value': [{ _: 'text/html', $: { 'rdf:datatype': 'http://purl.org/dc/terms/IMT' } }], 'dcam:memberOf': [{ $: { 'rdf:resource': 'http://purl.org/dc/terms/IMT' } }] }] }], 'dcterms:isFormatOf': [{ $: { 'rdf:resource': 'ebooks/1' } }], 'dcterms:modified': [{ _: '2018-08-11T14:06:48', $: { 'rdf:datatype': 'http://www.w3.org/2001/XMLSchema#dateTime' } }]
        }]
      }, {
        'pgterms:file': [{
          $: { 'rdf:about': 'http://www.gutenberg.org/ebooks/1.kindle.images' }, 'dcterms:isFormatOf': [{ $: { 'rdf:resource': 'ebooks/1' } }], 'dcterms:extent': [{ _: '2242791', $: { 'rdf:datatype': 'http://www.w3.org/2001/XMLSchema#integer' } }], 'dcterms:modified': [{ _: '2020-05-01T03:30:06.912309', $: { 'rdf:datatype': 'http://www.w3.org/2001/XMLSchema#dateTime' } }], 'dcterms:format': [{ 'rdf:Description': [{ $: { 'rdf:nodeID': 'Nc85374b6964c48aaa5627502ceb3d22e' }, 'dcam:memberOf': [{ $: { 'rdf:resource': 'http://purl.org/dc/terms/IMT' } }], 'rdf:value': [{ _: 'application/x-mobipocket-ebook', $: { 'rdf:datatype': 'http://purl.org/dc/terms/IMT' } }] }] }]
        }]
      }],
      'dcterms:issued': [{ _: '1971-12-01', $: { 'rdf:datatype': 'http://www.w3.org/2001/XMLSchema#date' } }],
      'dcterms:description': ['This is the original PG edition.\r\nSee also our revised edition: #16780\r\nSee also #300'],
      'dcterms:creator': [{
        'pgterms:agent': [{
          $: { 'rdf:about': '2009/agents/1638' }, 'pgterms:webpage': [{ $: { 'rdf:resource': 'http://en.wikipedia.org/wiki/Thomas_Jefferson' } }], 'pgterms:deathdate': [{ _: '1826', $: { 'rdf:datatype': 'http://www.w3.org/2001/XMLSchema#integer' } }], 'pgterms:name': ['Jefferson, Thomas'], 'pgterms:birthdate': [{ _: '1743', $: { 'rdf:datatype': 'http://www.w3.org/2001/XMLSchema#integer' } }], 'pgterms:alias': ['United States President (1801-1809)']
        }]
      }],
      'dcterms:language': [{ 'rdf:Description': [{ $: { 'rdf:nodeID': 'Nb0c58cb56c8243349a1308a423c8adbd' }, 'rdf:value': [{ _: 'en', $: { 'rdf:datatype': 'http://purl.org/dc/terms/RFC4646' } }] }] }],
      'pgterms:bookshelf': [{ 'rdf:Description': [{ $: { 'rdf:nodeID': 'Nd51be1bc5f4e4a29a5db5eaafbcecdfa' }, 'dcam:memberOf': [{ $: { 'rdf:resource': '2009/pgterms/Bookshelf' } }], 'rdf:value': ['American Revolutionary War'] }] }, { 'rdf:Description': [{ $: { 'rdf:nodeID': 'Nc1c1122236ae4e56a3f92fd165806398' }, 'dcam:memberOf': [{ $: { 'rdf:resource': '2009/pgterms/Bookshelf' } }], 'rdf:value': ['United States Law'] }] }, { 'rdf:Description': [{ $: { 'rdf:nodeID': 'N33c0d8f0c7a64758830ff94059a42926' }, 'rdf:value': ['Politics'], 'dcam:memberOf': [{ $: { 'rdf:resource': '2009/pgterms/Bookshelf' } }] }] }],
      'pgterms:downloads': [{ _: '418', $: { 'rdf:datatype': 'http://www.w3.org/2001/XMLSchema#integer' } }],
      'dcterms:title': ['The Declaration of Independence of the United States of America'],
      'dcterms:publisher': ['Project Gutenberg'],
      'dcterms:rights': ['Public domain in the USA.'],
      'dcterms:type': [{ 'rdf:Description': [{ $: { 'rdf:nodeID': 'Nf8f64cc2fcd047daa9e2ded0f24b30d6' }, 'dcam:memberOf': [{ $: { 'rdf:resource': 'http://purl.org/dc/terms/DCMIType' } }], 'rdf:value': ['Text'] }] }],
      'dcterms:license': [{ $: { 'rdf:resource': 'license' } }]
    }],
    'cc:Work': [{ $: { 'rdf:about': '' }, 'rdfs:comment': ['Archives containing the RDF files for *all* our books can be downloaded at\n            http://www.gutenberg.org/wiki/Gutenberg:Feeds#The_Complete_Project_Gutenberg_Catalog'], 'cc:license': [{ $: { 'rdf:resource': 'https://creativecommons.org/publicdomain/zero/1.0/' } }] }],
    'rdf:Description': [{ $: { 'rdf:about': 'http://en.wikipedia.org/wiki/Thomas_Jefferson' }, 'dcterms:description': ['Wikipedia'] }]
  }
};


const author = {
  'pgterms:deathdate': [{ _: '1826', $: { 'rdf:datatype': 'http://www.w3.org/2001/XMLSchema#integer' } }], 'pgterms:name': ['Jefferson, Thomas'], 'pgterms:birthdate': [{ _: '1743', $: { 'rdf:datatype': 'http://www.w3.org/2001/XMLSchema#integer' } }], 'pgterms:alias': ['United States President (1801-1809)']
};

module.exports = {
  parsedData,
  extractedData,
  author
};
