const dotenv = require('dotenv');
const createVendiaClient = require('@vendia/client').createVendiaClient;
const data = require('./rawData.json');
dotenv.config();

// Instantiate the Vendia client and authenticate to it.
const client = createVendiaClient({
  apiUrl: `https://cihcal58f3.execute-api.us-west-1.amazonaws.com/graphql/`,
  websocketUrl: `wss://9ol9kpkz06.execute-api.us-west-1.amazonaws.com/graphql`,
  apiKey: process.env.VENDIA_API_KEY
});
const { entities } = client;  // entities const to access schema properties.

for (let entry in data) {
  entities.people.add(
    {
      "DMV": {
        dob: data[entry]['DMV']['dob'],
        name: data[entry]['DMV']['name'],
        dlNumber: data[entry]['DMV']['dlNumber']
      },
      "SS": {
        name: data[entry]['SS']['name'],
        dob: data[entry]['SS']['dob'],
        ssNum: entry.toString()
      },
      "DOS": {
        name: data[entry]['DOS']['name'],
        dob: data[entry]['DOS']['dob'],
        passportNumber: data[entry]['DOS']['passportNumber'],
        passportExp: data[entry]['DOS']['passportExp']
      }
    }
  );
}