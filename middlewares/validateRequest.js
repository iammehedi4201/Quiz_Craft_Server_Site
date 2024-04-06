import catchAsync from "../utils/catchAsync.js";

const validateRequest = (Schema) => {
  return catchAsync(async (req, res, next) => {
    await Schema.parseAsync({
      body: req.body,
    });
    next();
  });
};

export default validateRequest;
