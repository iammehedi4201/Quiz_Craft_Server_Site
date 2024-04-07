import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";
import { env } from "../config/env.js";

const createUserToDB = async (payload) => {
  //: Logic to create user in DB
  const { name, email, password, role } = payload;

  //:hash password
  payload.password = await bcrypt.hash(payload.password, 12);
  const user = await User.create(payload).select("-password");

  //: create access token
  const jwtPayLoad = {
    email,
    role,
  };
  const accessToken = jwt.sign(jwtPayLoad, env.jwt_Access_secret_key, {
    expiresIn: env.jwt_Access_expires_in,
  });

  return { user, accessToken };
};

const login = async (payload) => {
  //:check if user exists
  const user = await User.findOne({ email: payload?.email });
  if (!user) {
    throw new Error("User not found");
  }

  console.log("user password", user?.password);

  console.log("payload password", payload?.password);

  //: check if password is correct
  const isPasswordCorrect = await bcrypt.compare(
    payload?.password,
    user?.password
  );

  console.log("isPasswordCorrect", isPasswordCorrect);
  if (!isPasswordCorrect) {
    throw new Error("Invalid credentials");
  }

  //: create access token
  const jwtPayLoad = {
    email: user?.email,
    role: user?.role,
  };
  const accessToken = jwt.sign(jwtPayLoad, env.jwt_Access_secret_key, {
    expiresIn: "30d",
  });

  return { accessToken };
};

export const authService = {
  createUserToDB,
  login,
};
