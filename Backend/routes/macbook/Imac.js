const cloudinary = require("../../utils/cloudinary")
const router = require("express").Router()
const {isAdmin} = require('../../middleware/auth')
const ImacModel = require("../../models/macbook/ImacModel")


router.post("/",async(req,res)=>{
    const {name,desc, price, image} = req.body

    try {

        if(image){
         const uploadRes = await cloudinary.uploader.upload(image,{
            upload_preset:"mepelaozenStore"
           })

           if(uploadRes){
            const macbook = new ImacModel({
                name,
                desc,
                price,
                image: uploadRes
            })

            const saveMacbook = await macbook.save()
            res.status(200).send(saveMacbook)
           }
        }
        
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
  
})


router.get("/",async(req,res)=>{

    try {
        const Imac = await ImacModel.find()
        res.status(200).send(Imac)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
   
})






module.exports = router