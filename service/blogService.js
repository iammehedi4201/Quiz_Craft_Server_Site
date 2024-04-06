import Blog from "../models/BlogModel.js";
import Module from "../models/ModuleModel.js";

const createBlogToDb = async (payload) => {
  const result = await Blog.insertMany(payload);
  return result;
};

const getBlogByModuleId = async (moduleId) => {
  //: check if the module exists
  const isModuleExist = await Module.findById(moduleId);
  if (!isModuleExist) {
    throw new Error("Module not found");
  }

  const blogs = await Blog.find({ moduleId: moduleId });
  console.log(blogs);
  return blogs;
};

export const blogService = {
  createBlogToDb,
  getBlogByModuleId,
};
