import { Router } from "express";
import { quizController } from "../controllers/quizController.js";
import validateRequest from "../middlewares/validateRequest.js";
import { validateQuiz } from "../validation/quizValidation.js";
import checkAuth from "../middlewares/checkAuth.js";
const quizRouter = Router();

quizRouter
  .route("/:id")
  .patch(quizController.checkingAnswer)
  .get(quizController.getQuizByModuleId)
  .put(
    validateRequest(validateQuiz.updateQuizSchemaValidation),
    quizController.updateQuiz
  );

quizRouter
  .route("/")
  .get(quizController.getQuizzes)
  .post(
    validateRequest(validateQuiz.quizSchemaValidation),
    quizController.createQuiz
  );

export default quizRouter;
