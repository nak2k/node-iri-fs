var graphfs = require('./graph');

var iri = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type';

console.log('IRI: %s\nPath: %s', iri, graphfs(iri));
