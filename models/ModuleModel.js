import { Schema, model } from "mongoose";
const moduleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    topicId: {
      type: Schema.Types.ObjectId,
      ref: "Topic",
      required: [true, "Module must belong to a topic"],
    },
    isDeleted: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Module = model("Module", moduleSchema);

export default Module;
