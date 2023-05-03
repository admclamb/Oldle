const { PORT = "5000" } = process.env;
require("dotenv").config();
import mongoose from "mongoose";
import { App } from "./App";
import { DatabaseConfig } from "./db/DatabaseConfig";
const ENV = process.env.NODE_ENV;
console.log("ENV: ", ENV);
if (!ENV) {
  throw new Error("A node enviroment is required");
}
const app = new App();
app.config();

function listener() {
  console.log(`Listening on Port ${PORT}!`);
}

mongoose
  .connect(DatabaseConfig.getDatabaseUri(ENV))
  .then((ans) => {
    console.log("DB connection is successful 🚀");
    app.listen(PORT, listener);
  })
  .catch((error: any) => {
    console.log("💣😑 What Happened");
    console.error(error);
  });
