import express from "express";
import dotenv from "dotenv"
import connectDB from "./database/db.js";
import userRouter from "./routes/user.route.js"
dotenv.config({});
import cookieParser from "cookie-parser";
import cors from "cors"


connectDB();
const app=express();
const port =process.env.port || 8080;

app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin:"http://localhost:5173",
  credentials:true
}))

app.use("/api/v1/user",userRouter);


app.listen(port,()=>{
  console.log("processing");
});