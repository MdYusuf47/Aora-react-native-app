import { Account, Client } from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.md.aora",
  projectId: "6642f7f00038795c8261",
  databaseId: "6642f9ea00232ba91e76",
  userCollectionId: "6642fa230021d84f812b",
  videoCollectionId: "6642fa68000d2d1ca39c",
  storageId: "6642fceb002477676308",
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectId) // Your project ID
  .setPlatform(config.platform); // Your application ID or bundle ID.

const account = new Account(client);

export const createUser = () => {
  account.create(ID.unique(), "me@example.com", "password", "Jane Doe").then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
};
