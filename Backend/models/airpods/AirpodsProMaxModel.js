const mongoose = require("mongoose")

const airPodsProMaxSchema = new mongoose.Schema({
    name:{type:String,required:true},
    desc:{type:String,required:true},
    price:{type:Number,required:true},
    image:{type:Object,required:true},

},{timestamps:true})



module.exports = mongoose.model("AirPods Pro Max",airPodsProMaxSchema)