import { RemoteMongoClient } from "mongodb-stitch-browser-sdk";
import { app } from "./app";

// TODO: Initialize a MongoDB Service Client
const mongoClient = app.getServiceClient(
  RemoteMongoClient.factory,
  "mongodb-atlas"
);

// TODO: Instantiate a collection handle for todo.items
const myplan = mongoClient.db("b90x").collection("myplan");
export { myplan };


// TODO: Instantiate a collection handle for user.items
const users = mongoClient.db("b90x").collection("users");
export { users };
