import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://fooddel:7011609038@cluster0.6bn0zoe.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}