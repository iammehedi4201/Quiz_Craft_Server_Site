import httpStatus from "http-status";

const notFound = (req, res) => {
  return res.status(httpStatus.NOT_FOUND).json({
    Success: false,
    message: `Api not found`,
  });
};

export default notFound;
