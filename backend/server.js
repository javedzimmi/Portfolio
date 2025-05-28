import express, { Router } from 'express';
import connectDB from './mongodb.js';
import cors from "cors"
import userRouter from './router/userRouter.js';

const app = express()
let port = 8001;

app.use(cors());


connectDB()


app.use(express.json());



app.get("/javeda", (req, res) => {
    res.send("javed alam")
})

app.use("/api",userRouter)




app.listen(port, () => {
    console.log("server is started")
});