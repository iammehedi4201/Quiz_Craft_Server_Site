import { blogService } from "../service/blogService.js";
import catchAsync from "../utils/catchAsync.js";
import sendResponse from "../utils/sendResponse.js";

const createBlogToDb = catchAsync(async (req, res) => {
  const result = await blogService.createBlogToDb(req.body);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Blog created successfully",
    data: result,
  });
});

const getBlogByModuleId = catchAsync(async (req, res) => {
  const moduleId = req.params.id;
  console.log(moduleId);
  const result = await blogService.getBlogByModuleId(moduleId);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Blogs fetched successfully",
    data: result,
  });
});

export const blogController = {
  createBlogToDb,
  getBlogByModuleId,
};
