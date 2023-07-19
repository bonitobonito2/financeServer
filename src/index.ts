import express from "express";
import dotenv from "dotenv";
import { myDataSource } from "./database/database.config";
import { App } from "./app";

const app = new App();

function main(): void {
  app.connectDatabase();
  app.listen(3000);
}

main();
