const request = require("request-promise");
const appconfig = require('../../configs/config/config');
const util = require('../../util/util');

const getBusinesses = async (req, res, next) => {
    try {
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
			response = await JSON.parse(response).businesses;
			response = await util.tranformJson(appconfig.business_response_fields,response);
			if (response.length > 0) {
				return res.status(200).json({
					'message': 'Businesses fetched successfully',
					'data': response
				});
			}
		}

        return res.status(404).json({
            'code': 'BAD_REQUEST_ERROR',
            'description': 'No Businesses found in the system'
        });
    } catch (error) {
        return res.status(500).json({
            'code': 'SERVER_ERROR',
            'description': 'something went wrong, Please try again'
        });
    }
}

const getBusinessById = async (req, res, next) => {
    try {
		console.log('getBusinessById');
		let businesses_id_URL = appconfig.businesses_id_URL.replace('{id}',req.params.id);
		let options = { url: businesses_id_URL,  headers: { 'User-Agent': 'request',  'Authorization': 'Bearer '+appconfig.apiKey }};
        let response = await request.get(options);//(req.params.id);
        if (response) {
            return res.status(200).json({
                'message': `Business with id ${req.params.id} fetched successfully`,
                'data': JSON.parse(response)
            });
        }

        return res.status(404).json({
            'code': 'BAD_REQUEST_ERROR',
            'description': 'No Businesses found in the system'
        });

    } catch (error) {

        return res.status(500).json({
            'code': 'SERVER_ERROR',
            'description': 'something went wrong, Please try again'
        });
    }
}



module.exports = {
    getBusinesses: getBusinesses,
    getBusinessById: getBusinessById
}

