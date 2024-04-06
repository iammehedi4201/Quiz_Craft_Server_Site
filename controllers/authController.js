import { authService } from "../service/authService.js";
import catchAsync from "../utils/catchAsync.js";
import sendResponse from "../utils/sendResponse.js";

const createUserToDB = catchAsync(async (req, res) => {
  const result = await authService.createUserToDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "User created successfully",
    data: result,
  });
});

const login = catchAsync(async (req, res) => {
  const result = await authService.login(req.body);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "User logged in successfully",
    data: result,
  });
});

export const authController = {
  createUserToDB,
  login,
};
