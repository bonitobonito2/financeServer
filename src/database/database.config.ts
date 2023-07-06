import dotenv from "dotenv";
import { DataSource } from "typeorm";
dotenv.config();

export const myDataSource = new DataSource({
  type: "postgres",
  host: process.env.DATABASE_MASTER_HOST,
  port: Number(process.env.DATABASE_PORT), // or the port number you are using
  username: process.env.DATABASE_USER,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  entities: [],
  synchronize: true,
});
