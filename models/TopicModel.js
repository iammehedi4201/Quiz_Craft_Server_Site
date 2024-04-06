import { Schema, model } from "mongoose";

const TopicSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      unique: true,
      trim: true,
    },
    // image: {
    //   type: String,
    //   required: [true, "Image is required"],
    //   trim: true,
    // },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const Topic = model("Topic", TopicSchema);
