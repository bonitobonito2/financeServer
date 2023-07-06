import express from "express";
import dotenv from "dotenv";
import { myDataSource } from "./database/database.config";
const app = express();

dotenv.config();

myDataSource
  .initialize()
  .then(() => {
    console.log("database connection estabilished");
  })
  .catch((err) => {
    console.log(err);
    throw err;
  });
