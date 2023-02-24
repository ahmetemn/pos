import mongoose from "mongoose";

const {Schema} = mongoose;

const ProductSchema =new Schema({

        title:{
            type:String,
            required:true,
            unique:true
        },
        
        img:{
            type:String,
            required:true,

        },
        price:{
            type:Number,
            required:true
        },
        category:{
            type:String,
            required:true
        }
        

} , {timestamps:true});

export default mongoose.model("products" , ProductSchema);