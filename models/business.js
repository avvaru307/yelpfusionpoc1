const request = require("request");
const apiKey = 'Y8s6dW3uAs-TZ34YRekghk7llJxJuj3JjNAcLtADi-OZ02Dl66_soagZHv-eTyQFHC8fGWfxblXrZxyW3msB1GARItcv2KG0qhzgowweVi4qxdw3fijzXeIyKKd2XXYx';

const getBusinesses = function() {
	console.log('i am here 111');
	let businessesURL = "https://api.yelp.com/v3/businesses/search?location=Alpharetta&categories=ice%20cream&sort-by=review&limit=5";
	let options = { url: businessesURL,  headers: { 'User-Agent': 'request',  'Authorization': 'Bearer '+apiKey }};
	return request.get(options, function(err, resp, body) { if (err) reject(err); else resolve(body); })
		
	//return [{ id:1, 'user':'One'},{ id:2, 'user':'Two'}]
}

const getBusinessById = function(id) {
	
	if(id==1){
		return { id:1, 'user':'One'};
	}
	else
		return { id:2, 'user':'Two'};

}

module.exports = {
    getBusinesses: getBusinesses,
    getBusinessById: getBusinessById
}