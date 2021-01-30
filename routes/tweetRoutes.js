import express from "express";
import {getTweets} from "../controller/tweetController.js";

const tweetRouter = express.Router();

tweetRouter.get("/:id", getTweets);

export default tweetRouter;