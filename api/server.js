
import express from "express";
import mongoose  from "mongoose";
import dotenv from "dotenv";
import categoryRoute from "./routes/Category.js";
import productRoute from "./routes/Products.js";
import billRoute from "./routes/Bills.js";
import authRoute from "./routes/Auth.js";
import cors from "cors";
mongoose.set('strictQuery', true)
const app = express();
dotenv.config()


//middlewares
app.use(express.json());
app.use(cors())


//Routes
app.use('/api/category' , categoryRoute);
app.use('/api/product' , productRoute)
app.use('/api/bill' , billRoute)
app.use('/api/auth' , authRoute)


































///Connect Db 

const connect =async() =>{
    try{
         
        await mongoose.connect(process.env.MONGO)
    }catch(error){
        throw error
    }
}
mongoose.connection.on('connected' , () =>{
    console.log("MongoDb Connected")


})

mongoose.connection.on('disconnected' , ()=>{
    console.log("MongoDb disconnected")
} )

///Port
const port = 8800
app.listen(port, () => {
   connect();
})
