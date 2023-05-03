import mongoose from "mongoose";
import { DatabaseConfig } from "../DatabaseConfig";

export class Seeder {
  static async connect(env: string) {
    let URI = DatabaseConfig.getDatabaseUri(env);
    console.log("URI: ", URI);
    mongoose
      .connect(URI)
      .then((con) => console.log("DB connection successful!"))
      .catch((err) => console.log("OH NO SOMETHING WENT WRONG ", err.message));
  }

  static async inject<dataT>(data: dataT, model: any, env: string) {
    try {
      console.log("DATA: ", data);
      await this.connect(env);
      await model.create(data);
    } catch (error: any) {
      console.error("There was an error: ", error.message);
    }
  }

  static async delete(model: any, env: string) {
    try {
      this.connect(env);
      await model.deleteMany();
      console.log("Data successfully deleted!");
    } catch (error) {
      console.error(error);
    }
  }
}
