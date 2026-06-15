import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/connectDb.js";
import authRouter from "./router/authRouter.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRouter from "./router/userRouter.js";
import interviewRouter from "./router/interviewRouter.js";
import paymentRouter from "./router/paymentRouter.js";
dotenv.config();

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  return res.json({ message: "Server Started" });
});

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/interview", interviewRouter);
app.use("/api/payment", paymentRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDb();
});
