
import mongoose from "mongoose";

const { Schema } = mongoose;



const UserSchema = new Schema({

    username: {
        type: String,
        unique: true,
        require: true

    },
    email: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String,
        require: true
    },

    // verify: {
    //     type: Boolean,
    //     require: true
    // }

})



export default mongoose.model("users", UserSchema);