const dotenv = require('dotenv');
const createVendiaClient = require('@vendia/client').createVendiaClient;
const data = require('./rawData.json');
dotenv.config();
const sleep = ms => new Promise(r => setTimeout(r, ms)); // Delay for specified amount of time(ms).

// Instantiate the Vendia client and authenticate to it.
const client = createVendiaClient({
  apiUrl: `https://pidepae25k.execute-api.us-west-1.amazonaws.com/graphql/`,
  websocketUrl: `wss://hfzij1lssi.execute-api.us-west-1.amazonaws.com/graphql`,
  apiKey: process.env.REACT_APP_VENDIA_API_KEY
});
const { entities } = client;  // entities const to access schema properties.

async function sendData() {
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
    await sleep(3000);  // Add 3 second delay in between API requests to avoid overloading Vendia servers.
  }
}

sendData();