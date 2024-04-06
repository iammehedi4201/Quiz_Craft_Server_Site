import QueryBuilder from "mongoose-dynamic-querybuilder";
import { Topic } from "../models/TopicModel.js";

const createTopicToDB = async (payLoad) => {
  const result = await Topic.create(payLoad);
  return result;
};

const getTopicFromDB = async (query) => {
  const topicQuery = new QueryBuilder(Topic.find({}), query);
  const [data, totalData] = await Promise.all([
    topicQuery
      .filter()
      .search(["module", "question", "description", "options", "answer"])
      .sort()
      .paginate()
      .fields().modelQuery,
    topicQuery.countTotal(),
  ]);

  console.log("Data", data);
  console.log("TotalData", totalData);

  const limit = Number(query?.limit) || 10;
  const meta = {
    limit,
    page: Number(query?.page) || 1,
    totalData,
    totalPage: Math.ceil(totalData / limit),
  };
  return { data, meta };
};

const updateTopicToDB = async (id, payLoad) => {
  const result = await Topic.findByIdAndUpdate(id, payLoad, { new: true });
  return result;
};

export const topicService = {
  createTopicToDB,
  getTopicFromDB,
  updateTopicToDB
};
