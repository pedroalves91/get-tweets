import express from "express";
import cors from "cors";
import tweetRouter from "./routes/tweetRoutes.js";

const app = express();

app.use(cors());

app.use("/tweets", tweetRouter);

app.listen(5000);