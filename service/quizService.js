import QueryBuilder from "mongoose-dynamic-querybuilder";
import { Quiz } from "../models/QuizModel.js";
import Module from "../models/ModuleModel.js";

//:create a quiz
const createQuizToDB = async (payload) => {
  const result = await Quiz.insertMany(payload);
  return result;
};

//:get all quizzes
const getQuizzesFromDb = async (query) => {
  const quizQuery = new QueryBuilder(Quiz.find(), query);
  const [data, totalData] = await Promise.all([
    quizQuery
      .filter()
      .search(["module", "question", "description", "options", "answer"])
      .sort()
      .paginate()
      .fields().modelQuery,
    quizQuery.countTotal(),
  ]);

  const limit = Number(query?.limit) || 10;
  const meta = {
    limit,
    page: Number(query?.page) || 1,
    total: totalData,
    totalPage: Math.ceil(totalData / limit),
  };
  return { data, meta };
};

//:get a quiz by module id
const getQuizByModuleId = async (id, query) => {
  console.log({ id });
  //:check if the id is valid
  const isQuizExist = await Module.findById(id);
  if (!isQuizExist) {
    throw new Error("Quiz not found");
  }
  const moduleBasedQuizQuery = new QueryBuilder(
    Quiz.find({ moduleId: id }),
    query
  );
  const [data, totalData] = await Promise.all([
    moduleBasedQuizQuery
      .filter()
      .search(["module", "question", "description", "options", "answer"])
      .sort()
      .paginate()
      .fields().modelQuery,
    moduleBasedQuizQuery.countTotal(),
  ]);

  const limit = Number(query.limit) || 10;
  const meta = {
    limit,
    page: Number(query.page) || 1,
    total: totalData,
    totalPage: Math.ceil(totalData / limit),
  };
  return { data, meta };
};

//:update quiz by id
const updateQuiz = async (id, payload) => {
  //:check if the id is valid
  const isQuizExist = await Quiz.findById(id);
  if (!isQuizExist) {
    throw new Error("Quiz not found");
  }
  const result = await Quiz.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

/**
 * payload = [
    { "questionId": "65eb3b535a12b7cbd3c9455a", "selectedOptionIndex": 1 },
    { "questionId": "65eb3b535a12b7cbd3c9455b", "selectedOptionIndex": 2 },
    { "questionId": "65eb3b535a12b7cbd3c9455c", "selectedOptionIndex": 1 },
    { "questionId": "65eb3b535a12b7cbd3c9455d", "selectedOptionIndex": 0 },
    { "questionId": "65eb3b535a12b7cbd3c9455e", "selectedOptionIndex": 0 },
    { "questionId": "65eb3b535a12b7cbd3c9455f", "selectedOptionIndex": 0 },
    { "questionId": "65eb3b535a12b7cbd3c94560", "selectedOptionIndex": 1 },
    { "questionId": "65eb3b535a12b7cbd3c94561", "selectedOptionIndex": 2 },
    { "questionId": "65eb3b535a12b7cbd3c94562", "selectedOptionIndex": 3 },
    { "questionId": "65eb3b535a12b7cbd3c94563", "selectedOptionIndex": 2 }
]
 * 
 */

//:check answer
const checkingAnswer = async (id, payload) => {
  console.dir(payload);
  //:check if the module is  exist or not
  const isModuleExist = await Module.findById(id);
  if (!isModuleExist) {
    throw new Error("Quiz not found");
  }
  const questions = await Quiz.find({ moduleId: id });
  let marks = 0;

  const result = payload?.map((item) => {
    const question = questions.find((q) => q._id == item.questionId);

    if (!question) {
      throw new Error(`Question with id ${item.questionId} not found`);
    }
    question.isCorrect =
      question.correctAnswerIndex === item.selectedOptionIndex;
    console.log(question.isCorrect, question.marks);
    if (question.isCorrect) {
      marks += question.marks;
    }
    return {
      questionId: question._id,
      isCorrect: question.isCorrect,
      marks
    };
  });
  return { result, marks };
};

export const quizService = {
  createQuizToDB,
  getQuizzesFromDb,
  getQuizByModuleId,
  updateQuiz,
  checkingAnswer,
};
