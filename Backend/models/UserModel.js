const mongoose = require("mongoose")



const userSchema = new mongoose.Schema({
    name:{
        type:String,
        minlenght:3,
        maxlenght:30,
        required:true
    },

    email:{
        type:String,
        minlenght:3,
        maxlenght:200,
        unique:true,
        required:true
    },


    password:{
        type:String,
        minlenght:3,
        maxlenght:1024,
        required:true
    },

    isAdmin:{
        type:Boolean,
        default:false
    }
})


module.exports = mongoose.model("User",userSchema)