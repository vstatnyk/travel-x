const createVendiaClient = require("@vendia/client").createVendiaClient;

// Instantiate the Vendia client and authenticate to it.
const client = createVendiaClient({
  apiUrl: `https://pidepae25k.execute-api.us-west-1.amazonaws.com/graphql/`,
  websocketUrl: `wss://hfzij1lssi.execute-api.us-west-1.amazonaws.com/graphql`,
  apiKey: process.env.REACT_APP_VENDIA_API_KEY,
});

const { entities } = client; // entities const to access schema properties.

export async function updateEntity(entityId, props) {
  await entities.people.update({
    _id: entityId,
    DMV: {
      name: props.name,
      dob: props.dob,
      dlNumber: props.dlNumber,
    },
    SS: {
      name: props.name,
      dob: props.dob,
    },
    DOS: {
      name: props.name,
      dob: props.dob,
      passportExp: props.passportExp,
      passportNumber: props.passportNumber,
    },
  });
}
