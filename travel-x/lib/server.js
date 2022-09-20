import * as dotenv from 'dotenv';
import { createVendiaClient } from '@vendia/client';
dotenv.config();

// Instantiate the Vendia client and authenticate to it.
const client = createVendiaClient({
  apiUrl: `https://515wv89hij.execute-api.us-west-1.amazonaws.com/graphql/`,
  websocketUrl: `wss://ce3d2k3vfc.execute-api.us-west-1.amazonaws.com/graphql`,
  apiKey: process.env.VENDIA_API_KEY
});

const { entities } = client;  // entities const to access schema properties.

// Add new entry into DMV array.
const response1 = await entities.DMV.add({
  dob: '03/02/2001',
  name: 'Jared',
  dlNumber: 'Y89HG651'
});

// Add new entry into SS array.
const response2 = await entities.SS.add({
  dob: '11/22/1999',
  name: 'Kyle',
});

// Add new entry into DOS array.
const response3 = await entities.DOS.add({
    dob: '10/20/1979',
    name: 'Alex',
    passportNumber: '840832461',
    passportExp: '09/30/2026'
});

// List the entries in DMV array.
const response4 = await entities.DMV.list();
console.log(response4);