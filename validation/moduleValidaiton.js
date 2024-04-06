import { z } from "zod";

const createModuleSchema = z.object({
  body: z.object({
    title: z.string(),
    topicId: z.string(),
    moduleId: z.string().optional(),
    isDeleted: z.boolean().optional(),
  }),
});

export const validateModule = {
  createModuleSchema,
};
