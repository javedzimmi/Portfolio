// routes/userRoutes.js
import express from "express";
import userdata from "../controller/userControler.js";

const userRouter = express.Router();

userRouter.post("/user", userdata);

export default userRouter;
