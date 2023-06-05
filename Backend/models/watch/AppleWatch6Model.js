const mongoose = require("mongoose")

const appleWatch6Schema = new mongoose.Schema({
    name:{type:String,required:true},
    desc:{type:String,required:true},
    price:{type:Number,required:true},
    image:{type:Object,required:true},

},{timestamps:true})



module.exports = mongoose.model("apple watch 6",appleWatch6Schema)