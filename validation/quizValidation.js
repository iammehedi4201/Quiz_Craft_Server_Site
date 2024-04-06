import z from "zod";

const quizSchemaValidation = z.object({
  body: z.array(
    z.object({
      moduleId: z.string(),
      question: z.string(),
      options: z.array(z.string()).nonempty(),
      correctAnswerIndex: z.number().int(),
      marks: z.number().int(),
      isCorrect: z.boolean().optional(),
    })
  ),
});

const updateQuizSchemaValidation = z.object({
  body: z.object({
    moduleId: z.string().optional(),
    question: z.string().optional(),
    options: z.array(z.string()).nonempty().optional(),
    correctAnswerIndex: z.number().int().optional(),
    marks: z.number().int().optional(),
    isCorrect: z.boolean().optional(),
  }),
});

export const validateQuiz = {
  quizSchemaValidation,
  updateQuizSchemaValidation,
};
