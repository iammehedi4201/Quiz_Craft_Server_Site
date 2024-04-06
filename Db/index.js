import { env } from "process";
import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";
const admin = {
  name: "Mehedi Hasan",
  email: env.ADMIN_EMAIL,
  password: env.ADMIN_PASSWORD,
  role: "admin",
  isDeleted: false,
};

export const seedAdmin = async () => {
  // check if admin exists
  const adminExists = await User.findOne({ role: "admin" });
  if (!adminExists) {
    //: hash admin password
    admin.password = bcrypt.hash(admin?.password, 12);
    await User.create(admin);
  }
};
