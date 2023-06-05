const bcrypt = require("bcrypt")
const Joi = require("joi")
const router = require("express").Router()
const  UserModel = require("../models/UserModel")
const genAuthToken = require("../utils/genAuthToken")


router.post("/",async(req,res)=>{
    const schema = Joi.object({
        name:Joi.string().min(3).max(30).required(),
        email:Joi.string().min(3).max(200).required().email(),
        password:Joi.string().min(6).max(200).required(),
    })

    const {error} = schema.validate(req.body)
    if(error) return res.status(400).send(error.details[0].message)

    let user = await UserModel.findOne({email:req.body.email})

    if(user) return res.status(400).send("User already exits...")

    user = new UserModel({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    })

    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(user.password,salt)

    user = await user.save()

    const token = genAuthToken(user)

    res.send(token)
})











module.exports = router