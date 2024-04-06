import { moduleService } from "../service/moduleService.js";
import catchAsync from "../utils/catchAsync.js";
import sendResponse from "../utils/sendResponse.js";

const getAllModules = catchAsync(async (req, res, next) => {
  const result = await moduleService.getAllModules();
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Modules fetched successfully",
    data: result,
  });
});

const getModulesById = catchAsync(async (req, res, next) => {
  const result = await moduleService.getModulesById(req.params.id);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Module fetched successfully",
    data: result,
  });
});

const createModuleToDB = catchAsync(async (req, res, next) => {
  const result = await moduleService.createModuleTODB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "Module created successfully",
    data: result,
  });
});

const checkingAnswer = catchAsync(async (req, res, next) => {
  const result = await moduleService.checkingAnswerFromDB(
    req.params.id,
    req.body
  );
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Answer checked successfully",
    data: result,
  });
});

const updateModule = catchAsync(async (req, res, next) => {});

const deleteModule = catchAsync(async (req, res, next) => {});

export const moduleController = {
  getAllModules,
  getModulesById,
  createModuleToDB,
  checkingAnswer,
  updateModule,
  deleteModule,
};
