

import User from "../models/User.js";
import bcryptjs from "bcryptjs";

export const  registerUser = async (req,res , next ) =>{
    const salt =  await bcryptjs.genSaltSync(8);
    const hash = await bcryptjs.hashSync(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            isAdmin:req.body.isAdmin
        });
    try {
        
       await newUser.save();
        res.status(200).json("User has been created")


    } catch (error) {
        next(error)
    }
}