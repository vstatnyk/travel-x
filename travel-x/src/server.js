const createVendiaClient = require('@vendia/client').createVendiaClient;

// Instantiate the Vendia client and authenticate to it.
const client = createVendiaClient({
  apiUrl: `https://cihcal58f3.execute-api.us-west-1.amazonaws.com/graphql/`,
  websocketUrl: `wss://9ol9kpkz06.execute-api.us-west-1.amazonaws.com/graphql`,
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
  console.log(response.items);
  return response.items[0].DMV.name;
}