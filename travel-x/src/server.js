const createVendiaClient = require('@vendia/client').createVendiaClient;

// Instantiate the Vendia client and authenticate to it.
const client = createVendiaClient({
  apiUrl: `https://pidepae25k.execute-api.us-west-1.amazonaws.com/graphql/`,
  websocketUrl: `wss://hfzij1lssi.execute-api.us-west-1.amazonaws.com/graphql`,
  apiKey: process.env.REACT_APP_VENDIA_API_KEY
});

const { entities } = client;  // entities const to access schema properties.

export async function query(ssn) {
  const response = await entities.people.list({
    filter: {
      SS: {
        ssNum: {
          contains: ssn
        }
      }
    },
  });
  
  return response.items[0];
}