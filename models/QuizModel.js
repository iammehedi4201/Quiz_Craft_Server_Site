import { Schema, model } from "mongoose";

const questionSchema = new Schema(
  {
    moduleId: {
      type: Schema.Types.ObjectId,
      ref: "Module",
      required: [true, "Question must belong to a module"],
    },
    question: {
      type: String,
      required: [true, "Question is required"],
    },
    options: {
      type: [String],
      required: [true, "Options are required"],
    },
    correctAnswerIndex: {
      type: Number,
      required: [true, "Correct Answer Index is required"],
    },
    marks: {
      type: Number,
      required: [true, "Marks are required"],
    },
    isCorrect: {
      type: Boolean,
    },
  },
  {
    versionKey: false,
  }
);

export const Quiz = model("Quiz", questionSchema);
