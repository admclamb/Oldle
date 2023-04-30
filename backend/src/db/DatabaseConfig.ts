import mongoose, { Mongoose } from "mongoose";

export class DatabaseConfig {
  public static getDatabaseUri(env: string): string {
    if (env === "production") {
      return process.env.DATABASE_URL || "";
    } else if (env === "test") {
      return process.env.DATABASE_URL_TEST || "";
    } else {
      return process.env.DATABASE_URL_DEVELOPMENT || "";
    }
  }

  public static async connect(env: string): Promise<Mongoose> {
    try {
      const connection = await mongoose.connect(
        DatabaseConfig.getDatabaseUri(env)
      );
      return connection;
    } catch (err) {
      console.error("💣😓 What Happened!");
    }
  }

  public static async init(env: string): Promise<void> {
    const mongoose = await DatabaseConfig.connect(env);
    const db = mongoose.connection;
    db.on("error", (error) => {
      console.error(error);
    });
    db.once("connected", () => {
      console.log("Datbase Connected");
    });
  }
}
