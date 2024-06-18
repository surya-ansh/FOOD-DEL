import express from "express";
import { addFood, listFood, removeFoodItem } from "../controllers/FoodController.js";
import multer from "multer"

const foodRouter = express.Router();

// image storage engine

const storage = multer.diskStorage({
    destination : "uploads",
    filename:(req,file,cb)=>{
        // this will create a file with unique name ==date
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})
// middleware upload
const upload = multer({storage:storage})

// post req to the image so that user can upload the image
foodRouter.post("/add",upload.single("image"),addFood)
// get request to get the access of the image uploaded by the user
foodRouter.get("/list",listFood)
// post request to delete the food item
foodRouter.post("/remove",removeFoodItem)





export default foodRouter;

