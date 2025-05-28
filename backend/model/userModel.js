import mongoose from "mongoose";

const userData=new mongoose.Schema({
  name:{type: String, required:true },
    email:{type: String, required:true, unique: true },
    subject:{type: String, required:true },
    about:{type: String, required:true },
})

const userModel=mongoose.model("User",userData)
export default userModel;
