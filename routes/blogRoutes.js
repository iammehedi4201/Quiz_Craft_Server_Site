import { Router } from "express";
import validateRequest from "../middlewares/validateRequest.js";
import { validateBlog } from "../validation/BlogValidation.js";
import { blogController } from "../controllers/blogController.js";

const blogRouter = Router();

//! Get blog by module id
blogRouter.get("/:id", blogController.getBlogByModuleId);

//! Create blog
blogRouter
  .route("/")
  .post(
    validateRequest(validateBlog.createBlogSchemaValidation),
    blogController.createBlogToDb
  );

export default blogRouter;
