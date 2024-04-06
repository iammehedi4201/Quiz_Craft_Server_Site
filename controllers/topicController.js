import { topicService } from "../service/topicService.js";
import catchAsync from "../utils/catchAsync.js";
import sendResponse from "../utils/sendResponse.js";

const createTopic = catchAsync(async (req, res) => {
  const result = await topicService.createTopicToDB(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Topic created successfully",
    data: result,
  });
});

const getTopic = catchAsync(async (req, res) => {
  const result = await topicService.getTopicFromDB(req.query);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Topic fetched successfully",
    meta: result.meta,
    data: result.data,
  });
});

const updateTopic = catchAsync(async (req, res) => {
  const result = await topicService.updateTopicToDB(req.params.id, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Topic updated successfully",
    data: result,
  });
});

export const topicController = {
  createTopic,
  getTopic,
  updateTopic,
};
