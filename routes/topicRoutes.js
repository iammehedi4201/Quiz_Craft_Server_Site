import { Router } from "express";
import { topicController } from "../controllers/topicController.js";
import validateRequest from "../middlewares/validateRequest.js";
import { topicValidation } from "../validation/topicValidation.js";
const topicRouter = Router();

topicRouter
  .route("/:id")
  // .get(topicController.getTopic)
  .patch(
    validateRequest(topicValidation.updateTopicValidationSchema),
    topicController.updateTopic
  );
// .delete(topicController.deleteTopic);

topicRouter
  .route("/")
  .get(topicController.getTopic)
  .post(
    validateRequest(topicValidation.createTopicValidationSchema),
    topicController.createTopic
  );

export const topicRoutes = topicRouter;
