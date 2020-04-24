const NodeGeocoder = require('node-geocoder');
 
const options = {
  provider: 'google',
  apiKey: 'AIzaSyD3Gbq8HPsUdZHbT9jCFY1hEp9KGxt9Li4',
};

const geocoder = NodeGeocoder(options);
 
(async () => {
  const location = await geocoder.geocode('Benicia, CA');
  
  /** A list of matching locations is returned */
  console.log(JSON.stringify(location));
})();