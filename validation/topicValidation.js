import z from "zod";

const createTopicValidationSchema = z.object({
  body: z.object({
    title: z.string().min(3).max(255),
  }),
});

const updateTopicValidationSchema = z.object({
  body: z.object({
    title: z.string().min(3).max(255).optional(),
  }),
});

export const topicValidation = {
  createTopicValidationSchema,
  updateTopicValidationSchema,
};
