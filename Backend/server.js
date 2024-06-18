import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config'

// app config
const app = express();
const port = process.env.PORT || 4000;

// middleware
app.use(express.json())
app.use(cors())

// DB Connection
connectDB();

// API endpoints
app.use("/api/food", foodRouter);
// to get the access of image uploaded by user
app.use("/images",express.static("uploads"));
app.use("/api/user",userRouter);


app.get("/", (req,res)=>{
    res.send("API Working");
})

// running express server
app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})

// mongodb+srv://fooddel:7011609038@cluster0.6bn0zoe.mongodb.net/?