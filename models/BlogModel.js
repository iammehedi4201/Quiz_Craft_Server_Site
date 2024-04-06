import { Schema, model } from "mongoose";
const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    moduleId: {
      type: Schema.Types.ObjectId,
      ref: "Module",
      required: [true, "Blog must belong to a module"],
    },
    content: {
      type: String,
      required: [true, "Blog must have content"],
      trim: true,
    },
    author: {
      type: String,
      trim: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Blog = model("Blog", blogSchema);
export default Blog;
