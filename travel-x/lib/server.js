import * as dotenv from 'dotenv';
import { createVendiaClient } from '@vendia/client';
dotenv.config();

// Instantiate the Vendia client and authenticate to it.
const client = createVendiaClient({
  apiUrl: `https://cihcal58f3.execute-api.us-west-1.amazonaws.com/graphql/`,
  websocketUrl: `wss://9ol9kpkz06.execute-api.us-west-1.amazonaws.com/graphql`,
  apiKey: process.env.VENDIA_API_KEY
});

const { entities } = client;  // entities const to access schema properties.

// Add new entry into People array.
const response1 = await entities.people.add(
  {
    "DMV": {
      dob: '03/02/2001',
      name: 'Jared',
      dlNumber: 'Y89HG651'
    },
    "SS": {
      name: 'Jared',
      dob: '03/02/2001',
      ssNum: '876-01-7824'
    },
    "DOS": {
      name: 'Jared',
      dob: '03/02/2001',
      passportNumber: '164834623',
      passportExp: '10/08/2024'
    }
  }
);

// List the entries in DMV array.
const response4 = await entities.people.list();
console.log(response4);