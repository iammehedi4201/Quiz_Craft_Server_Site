import { User } from "../models/userModel.js";
import jwt from "jsonwebtoken";
import catchAsync from "../utils/catchAsync.js";

const checkAuth = (...requiredRoles) => {
  return catchAsync(async (req, res, next) => {
    const token = req.headers?.authorization;
    //check if the token sent by user
    if (!token) {
      throw new Error("No token sent by user");
    }
    //check if the token is valid
    const decoded = jwt.verify(
      token,
      config.jwt_Access_secret_key,
      function (err, decoded) {
        if (err) {
          throw new Error("Unauthorized Access");
        }
        return decoded;
      }
    );
    // decoded = jwt.verify(token, config.jwt_Access_secret_key) as TjwtPayLoad;
    const { email } = decoded;

    //check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User does not exist");
    }

    //check if the user is deleted
    const isDeleted = user?.isDeleted;
    if (isDeleted) {
      throw new Error("User is Deleted");
    }

    //check if the user role is allowed to access the route
    if (requiredRoles && !requiredRoles.includes(role)) {
      //check if the user role is allowed to access the route
      throw Error("You are not authorized.No Role is given");
    }
    //decoded
    req.user = decoded;

    next();
  });
};

export default checkAuth;
