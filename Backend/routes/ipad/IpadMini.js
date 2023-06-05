const cloudinary = require("../../utils/cloudinary")
const router = require("express").Router()
const {isAdmin} = require('../../middleware/auth')
const IpadMiniModel = require("../../models/ipad/IpadMiniModel")


router.post("/",async(req,res)=>{
    const {name,desc, price, image} = req.body

    try {

        if(image){
         const uploadRes = await cloudinary.uploader.upload(image,{
            upload_preset:"mepelaozenStore"
           })

           if(uploadRes){
            const ipadMini = new IpadMiniModel({
                name,
                desc,
                price,
                image: uploadRes
            })

            const saveIpad = await ipadMini.save()
            res.status(200).send(saveIpad)
           }
        }
        
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
  
})


router.get("/",async(req,res)=>{

    try {
        const ipadMini = await IpadMiniModel.find()
        res.status(200).send(ipadMini)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
   
})






module.exports = router