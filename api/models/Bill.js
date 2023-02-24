

import mongoose from "mongoose";


const {Schema} =mongoose;


const BillSchema = new Schema({

    customerName:{
        type:String,
        require:true
    },

    phoneNumber:{
        type:String,
        unique:true,
        require:true
    },
    payment:{
        type:String,
        require:true
    },
    subTotal:{
        type:Number,
        require:true
    },
    cardItems:{
        type:Array,
        require:true
    },
    subTotal:{
        type:Number,
        require:true
    }, 
    tax:{
        type:Number,
        require:true
    },  
    totalAmount:{
        type:Number,
        require:true
    }


} , {timestamps:true})


export default mongoose.model("bills" , BillSchema);