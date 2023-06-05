import mongoose, { Mongoose } from "mongoose";

export class DatabaseConfig {
  public static getDatabaseUri(env: string): string {
    console.log("URI: ", env);
    console.log("PROCESS ENV: ", process.env.DATABASE_URL_DEVELOPMENT);
    if (env === "production") {
      return process.env.DATABASE_URL || "";
    } else if (env === "test") {
      return process.env.DATABASE_URL_TEST || "";
    } else {
      return process.env.DATABASE_URL_DEVELOPMENT || "";
    }
  }

  public static async connect(env: string): Promise<any> {
    try {
      const url = DatabaseConfig.getDatabaseUri(env);
      console.log("URL: ", url);
      const connection = await mongoose.connect(url);
      return connection;
    } catch (err) {
      console.error("💣😓 What Happened!");
    }
  }

  public static async init(env: string): Promise<void> {
    const mongoose = await DatabaseConfig.connect(env);
    const db = mongoose.connection;
    db.on("error", (error: any) => {
      console.error(error);
    });
    db.once("connected", () => {
      console.log("Datbase Connected");
    });
  }
}
