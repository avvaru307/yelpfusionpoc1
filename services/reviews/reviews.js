const request = require("request-promise");
const appconfig = require('../../configs/config/config');

const getReviewsforBusinessById = async (req, res, next) => {
    try {
		console.log('getReviewsforBusinessById');
		let businesses_review_id_URL = appconfig.businesses_reviews_id_URL.replace('{id}',req.params.id);
		let options = { url: businesses_review_id_URL,  headers: { 'User-Agent': 'request',  'Authorization': 'Bearer '+appconfig.apiKey }};
        let response = await request.get(options);//(req.params.id);
        if (response) {
            return res.status(200).json({
                'message': `Reviews for Business with id ${req.params.id} fetched successfully`,
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
    getReviewsforBusinessById: getReviewsforBusinessById
}