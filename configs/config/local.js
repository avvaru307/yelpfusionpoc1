let localConfig = {
  hostname: 'localhost',
  port: 3000,
  apiKey: 'Y8s6dW3uAs-TZ34YRekghk7llJxJuj3JjNAcLtADi-OZ02Dl66_soagZHv-eTyQFHC8fGWfxblXrZxyW3msB1GARItcv2KG0qhzgowweVi4qxdw3fijzXeIyKKd2XXYx',
  businesses_search_URL:"https://api.yelp.com/v3/businesses/search?location={location}&categories={categories}&sort-by=review",
  businesses_id_URL:"https://api.yelp.com/v3/businesses/{id}"  ,
  businesses_reviews_id_URL:"https://api.yelp.com/v3/businesses/{id}/reviews",  
  business_response_fields:[{"lookupfield":"id","modelfield":"id","default":0},{"lookupfield":"name","modelfield":"name","default":""},{"lookupfield":"review_count","modelfield":"review_count","default":""},{"lookupfield":"rating","modelfield":"rating","default":""},{"lookupfield":"display_phone","modelfield":"phone","default":""},{"lookupfield":"location.display_address","modelfield":"display_address","default":""}],
  business_dashboard_fields:[{"lookupfield":"id","modelfield":"id","default":0},{"lookupfield":"name","modelfield":"name","default":""},{"lookupfield":"review_count","modelfield":"review_count","default":""},{"lookupfield":"rating","modelfield":"rating","default":""},{"lookupfield":"display_phone","modelfield":"phone","default":""},{"lookupfield":"location.display_address","modelfield":"display_address","default":""},{"lookupfield":"reviews","modelfield":"reviews","default":""}],
  reviews_response_fields:[{"lookupfield":"text","modelfield":"text","default":""},{"lookupfield":"rating","modelfield":"rating","default":"5"},{"lookupfield":"user.name","modelfield":"username","default":""}]
};

module.exports = localConfig;
