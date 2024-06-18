import fs from 'fs'
import foodModel from '../models/FoodModel.js'


// add food item

const addFood = async (req,res)=> {
    // this line is requesting the file name from the databse by which name it is saved
    let image_filename = `${req.file.filename}`;

        // a new model that get the values of all defined objects
    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try{
        // wait till the food got saved in database
        await food.save();
        res.json({success:true,message:"Food Added"})
    }catch(error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }

}

// all food list
const listFood= async (req,res)=>{
    try {
        // find is a filter property that filter all the components till it matches the given filter {} and as all of it are object so it counts all of it
        const foods =await foodModel.find({})
        res.json({success:true,data:foods})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

const removeFoodItem= async (req,res)=>{
    try {
        // to delete the food which we want to delete 
        const food = await foodModel.findById(req.body.id);
        // to delete the image from database 
        fs.unlink(`uploads/${food.image}`,()=>{})

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Food Removed"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}


export  {addFood,listFood,removeFoodItem }