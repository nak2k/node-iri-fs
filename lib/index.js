var path = require('path');
var IRI = require('iri').IRI;

module.exports = irifs;

function irifs(base) {
  function obj(iri) {
    return obj.fromIRI(iri);
  };

  obj._base = base;
  obj.fromIRI = fromIRI.bind(obj);
  
  return obj;
}

function fromIRI(iri) {
  var parsedIri = new IRI(iri);
  var args = [ this._base, parsedIri.scheme() ];

  if (parsedIri.authority() === null) {
    args.push(parsedIri.path().replace(':', '/'));
  } else {
    args.push(parsedIri.authority(), parsedIri.path());
  }

  return path.join.apply(path, args);
}
