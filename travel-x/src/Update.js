const createVendiaClient = require("@vendia/client").createVendiaClient;

// Instantiate the Vendia client and authenticate to it.
const client = createVendiaClient({
  apiUrl: `https://pidepae25k.execute-api.us-west-1.amazonaws.com/graphql/`,
  websocketUrl: `wss://hfzij1lssi.execute-api.us-west-1.amazonaws.com/graphql`,
  apiKey: process.env.REACT_APP_VENDIA_API_KEY,
});

const { entities } = client; // entities const to access schema properties.

  export async function update(entityId, props) {
    const entity = await entities.people.get(entityId);
    entity.DMV.name = props.name;
    entity.DMV.dob = props.dob;
    entity.DMV.dlNumber = props.dlNumber;
    entity.SS.name = props.name;
    entity.SS.dob = props.dob;
    entity.DOS.name = props.name;
    entity.DOS.dob = props.dob;
    entity.DOS.passportExp = props.passportExp;
    entity.DOS.passportNumber = props.passportNumber;
    await entities.people.update(entity);
  }