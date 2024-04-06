import { quizService } from "../service/quizService.js";
import catchAsync from "../utils/catchAsync.js";
import sendResponse from "../utils/sendResponse.js";

const getQuizzes = catchAsync(async (req, res, next) => {
  const result = await quizService.getQuizzesFromDb(req.query);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Quizzes fetched successfully",
    meta: result?.meta,
    data: result?.data,
  });
});

const getQuizByModuleId = catchAsync(async (req, res) => {
  const result = await quizService.getQuizByModuleId(req?.params?.id, req?.query);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Quiz fetched successfully",
    meta: result.meta,
    data: result.data,
  });
});

const createQuiz = catchAsync(async (req, res, next) => {
  const result = await quizService.createQuizToDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "Quiz created successfully",
    data: result,
  });
});

const updateQuiz = catchAsync(async (req, res, next) => {
  const result = await quizService.updateQuiz(req.params.id, req.body);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Quiz updated successfully",
    data: result,
  });
});

const checkingAnswer = catchAsync(async (req, res, next) => {
  const result = await quizService.checkingAnswer(req.params.id, req.body);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Answer checked successfully",
    mark: result?.marks,
    data: result?.result,
  });
})

// const deleteQuiz = async (req, res, next) => {
//   try {
//     const id = req.params.id;
//     if (!id) throw new Error("Invalid ID");

//     const data = await Quiz.findByIdAndDelete(id);

//     res.status(200).send({
//       success: true,
//       message: "Quiz deleted successfully",
//       data,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

export const quizController = {
  getQuizByModuleId,
  createQuiz,
  getQuizzes,
  updateQuiz,
  checkingAnswer
};
