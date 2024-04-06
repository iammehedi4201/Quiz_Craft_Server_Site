import { Router } from "express";
import validateRequest from "../middlewares/validateRequest.js";
import { authValidation } from "../validation/authValidation.js";
import { authController } from "../controllers/authController.js";

const authRouter = Router();

authRouter.post(
  "/registerUser",
  validateRequest(authValidation.createUserSchema),
  authController.createUserToDB
);

authRouter.post(
  "/login",
  validateRequest(authValidation.loginUserSchema),
  authController.login
);

export default authRouter;
