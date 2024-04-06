const sendResponse = (res, data) => {
  return res.status(data.statusCode).json(data);
};

export default sendResponse;
