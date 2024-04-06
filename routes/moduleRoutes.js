import { Router } from "express";
import { moduleController } from "../controllers/moduleController.js";
import validateRequest from "../middlewares/validateRequest.js";
import { validateModule } from "../validation/moduleValidaiton.js";
const moduleRouter = Router();

moduleRouter
  .route("/:id")
  .get(moduleController.getModulesById)
  .patch(moduleController.checkingAnswer)
  .delete(moduleController.deleteModule);

moduleRouter
  .route("/")
  .get(moduleController.getAllModules)
  .post(
    validateRequest(validateModule.createModuleSchema),
    moduleController.createModuleToDB
  );

export default moduleRouter;
