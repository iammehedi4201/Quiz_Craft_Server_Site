import mongoose from "mongoose";
import { env } from "./env.js";
import { seedAdmin } from "../Db/index.js";


const connectDatabase = async () => {
  console.log(env.database_url);

  try {
    await mongoose.connect(env.database_url);
    //: call seedAdmin function here
    await seedAdmin();
  } catch (error) {
    console.error(error);
  }
};

export default connectDatabase;
