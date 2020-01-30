const objectPath = require("object-path");

const decodeURLParams = search => {
  const hashes = search.slice(search.indexOf("?") + 1).split("&");
  return hashes.reduce((params, hash) => {
    const split = hash.indexOf("=");
    const key = hash.slice(0, split);
    const val = hash.slice(split + 1);
    return Object.assign(params, { [key]: decodeURIComponent(val) });
  }, {});
};

const tranformJson = (_xpaths,_responsejson) => {
	//console.log(_xpaths);
	try{	
		let _result = [];
		_responsejson = _responsejson.map(_resObj => {
			 let _tobj = {};
			_xpaths.forEach(_xpath => {
				_tobj[_xpath.modelfield] = objectPath.ensureExists(_resObj, _xpath.lookupfield,_xpath.default);
			});	
			_result.push(_tobj);
		});	
		//console.log(_result);
		return _result;
	}
	catch(error){
		return _responsejson;
	}

}

module.exports = {
    decodeURLParams: decodeURLParams,
	tranformJson: tranformJson
}