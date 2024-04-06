import Module from "../models/ModuleModel.js";

const getAllModules = async () => {
  const result = await Module.find();
  return result;
};

const createModuleTODB = async (payload) => {
  const result = await Module.create(payload);
  return result;
};

const getModulesById = async (id) => {
  const result = await Module.find({ topicId: id });
  return result;
};

export const moduleService = {
  getAllModules,
  createModuleTODB,
  getModulesById,
};
