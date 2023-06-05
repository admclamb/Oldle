import { Picture } from "../../models/PictureModel";
import picturesData from "./PictureData.json";
import { Seeder } from "./Seeder";
require("dotenv").config();
export async function seed(env: string, provider: string) {
  if (provider === "pictures") {
    await Seeder.inject<any>(picturesData, Picture, env);
  }
}

export async function reap(env: string, provider: string) {
  if (provider === "pictures") {
    await Seeder.delete(picturesData, env);
  }
}

if (!process.argv[3]) {
  throw new Error("An enviroment is required");
}

if (process.argv[4]) {
  if (process.argv[2] === "--import") {
    seed(process.argv[3], process.argv[4]);
  }
  if (process.argv[2] === "--delete") {
    reap(process.argv[3], process.argv[4]);
  }
} else {
}
