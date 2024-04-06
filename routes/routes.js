import { Router } from "express";
import { topicRoutes } from "./topicRoutes.js";
import moduleRouter from "./moduleRoutes.js";
import quizRouter from "./quizRoutes.js";
import authRouter from "./authRoutes.js";
import blogRouter from "./blogRoutes.js";

const router = Router();

router.use("/module", moduleRouter);
router.use("/quiz", quizRouter);
router.use("/topic", topicRoutes);
router.use("/auth", authRouter);
router.use("/blog", blogRouter);

export default router;
