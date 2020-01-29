let localConfig = {
  hostname: 'localhost',
  port: 3000,
  apiKey: 'Y8s6dW3uAs-TZ34YRekghk7llJxJuj3JjNAcLtADi-OZ02Dl66_soagZHv-eTyQFHC8fGWfxblXrZxyW3msB1GARItcv2KG0qhzgowweVi4qxdw3fijzXeIyKKd2XXYx',
  businesses_search_URL:"https://api.yelp.com/v3/businesses/search?location=Alpharetta&categories=ice%20cream&sort-by=review&limit=5",
  businesses_id_URL:"https://api.yelp.com/v3/businesses/{id}"  ,
  businesses_reviews_id_URL:"https://api.yelp.com/v3/businesses/{id}/reviews"
};

module.exports = localConfig;