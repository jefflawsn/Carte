const Amadeus = require('amadeus');

var amadeus = new Amadeus({
    clientId: 'WcldMsB2tLE920ukmAPwKRFDWz0LF5wc',
    clientSecret: 'H2Od7bLf6ALCEsun'
  });
/*
  amadeus.client.get('/v2/reference-data/urls/checkin-links', { airlineCode: 'BA' }).then(
    (result) => {
        console.log(result)
      })
https://test.api.amadeus.com/v1/reference-data/locations/pois/by-square?north=41.397158&west=2.160873&south=41.394582&east=2.177181
*/

amadeus.client.get('/v1/reference-data/locations/pois/by-square', 
{   north: 48.6149736,
    west: 2.3835366,
    south: 48.5149736,
    east: 2.3935366,
}).then(
    (result) => {
        console.log(result)
      }).cat