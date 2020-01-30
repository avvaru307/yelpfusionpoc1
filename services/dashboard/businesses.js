const request = require("request-promise");
const appconfig = require('../../configs/config/config');
const reviewService = require('../../services/reviews/reviews');
const util = require('../../util/util');

const getBusinessesWithReviews = async (req, res, next) => {
    try {
		console.log('getBusinessesWithReviews');
		let params = util.decodeURLParams(req.url);
		if(params['location'] && params['categories'])
		{
			let businesses_search_URL = appconfig.businesses_search_URL;
			businesses_search_URL = businesses_search_URL.replace('{location}',encodeURI(params['location']));
			businesses_search_URL = businesses_search_URL.replace('{categories}',encodeURI(params['categories']));
			if(params['limit'])
				businesses_search_URL = businesses_search_URL + '&limit='+params['limit'];
			else
				businesses_search_URL = businesses_search_URL + '&limit=5';
			console.log(businesses_search_URL);
			let options = { url: businesses_search_URL,  headers: { 'User-Agent': 'request',  'Authorization': 'Bearer '+appconfig.apiKey }};
			let response = await request.get(options);
			response = await getReviews(JSON.parse(response).businesses);
			response = await util.tranformJson(appconfig.business_dashboard_fields,response);			
			if (response.length > 0) {
				return res.status(200).json({
					'message': 'Top 5 Businesses with Reviews fetched successfully',
					'data': response
				});
			}
		}			
        return res.status(404).json({
            'code': 'BAD_REQUEST_ERROR',
            'description': 'No Businesses found in the system'
        });
    } catch (error) {
		console.log(error);
        return res.status(500).json({
            'code': 'SERVER_ERROR',
            'description': 'something went wrong, Please try again'
        });
    }
}

async function getReviews(businesses) {
	if(businesses){
		for (const business of businesses) {
		 try {
			let _turl = appconfig.businesses_reviews_id_URL.replace('{id}',business.id);
			let options = { url: _turl,  headers: { 'User-Agent': 'request',  'Authorization': 'Bearer '+appconfig.apiKey }};
			let result = await request.get(options);
			business["reviews"] = await util.tranformJson(appconfig.reviews_response_fields,JSON.parse(result).reviews);
		 }
		 catch (error) {
			 business["reviews"] = [];
		 }
		}
	}
	return businesses;
 }

module.exports = {
    getBusinessesWithReviews: getBusinessesWithReviews
}

