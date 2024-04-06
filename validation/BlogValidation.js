import { z } from "zod";

const createBlogSchemaValidation = z.object({
  body: z.array(
    z.object({
      title: z.string(),
      content: z.string(),
      moduleId: z.string(),
    })
  ),
});

export const validateBlog = {
  createBlogSchemaValidation,
};
