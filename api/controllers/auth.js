

import User from "../models/User.js";
import bcryptjs from "bcryptjs";

export const registerUser = async (req, res, next) => {
    const salt = await bcryptjs.genSaltSync(8);
    const hash = await bcryptjs.hashSync(req.body.password, salt);

    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hash,
        isAdmin: req.body.isAdmin
    });
    try {

        await newUser.save();
        res.status(200).json("User has been created")


    } catch (error) {
        next(error)
    }
}

export const loginUser = async (req, res, next) => {

    try {

        const user = await User.findOne({ email: req.body.email, })
        if (!user) {
            res.status(404).send({ error: "Not found User" })
        }

        const isPasswordCorrect = await bcryptjs.compare(req.body.password, user.password)
        if (!isPasswordCorrect) {
            res.status(403).send({ error: "not found user or correct password" })
        }
        else {
            res.status(200).json(user)
        }

    } catch (error) {
        next(error)
    }
}