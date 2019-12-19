import { RemoteMongoClient } from "mongodb-stitch-browser-sdk";
import { app } from "./app";

// TODO: Initialize a MongoDB Service Client
const mongoClient = app.getServiceClient(
  RemoteMongoClient.factory,
  "mongodb-atlas"
);

// TODO: Instantiate a collection handle for todo.items
const items = mongoClient.db("b90x").collection("items2");
const plan = mongoClient.db("b90x").collection("plan");

export { items };
export { plan };