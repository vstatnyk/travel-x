const createVendiaClient = require("@vendia/client").createVendiaClient;
const FileSaver = require('file-saver');

// Instantiate the Vendia client and authenticate to it.
const client = createVendiaClient({
  apiUrl: `https://pidepae25k.execute-api.us-west-1.amazonaws.com/graphql/`,
  websocketUrl: `wss://hfzij1lssi.execute-api.us-west-1.amazonaws.com/graphql`,
  apiKey: process.env.REACT_APP_VENDIA_API_KEY,
});

const { storage } = client;

export async function getManifest(fileId) {
  const getFileResponse = await storage.files.get(fileId);
  console.log(getFileResponse.etag);
  return getFileResponse.temporaryUrl;
}