 cloudinary = require("../../utils/cloudinary")
const router = require("express").Router()
const {isAdmin} = require('../../middleware/auth')
const AppleWatchUltraModel = require("../../models/watch/AppleWatchUltraModel")


router.post("/",async(req,res)=>{
    const {name,desc, price, image} = req.body

    try {

        if(image){
         const uploadRes = await cloudinary.uploader.upload(image,{
            upload_preset:"mepelaozenStore"
           })

           if(uploadRes){
            const appleWatch = new AppleWatchUltraModel({
                name,
                desc,
                price,
                image: uploadRes
            })

            const saveAppleWatch = await appleWatch.save()
            res.status(200).send(saveAppleWatch)
           }
        }
        
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
  
})


router.get("/",async(req,res)=>{

    try {
        const appleWatch = await AppleWatchUltraModel.find()
        res.status(200).send(appleWatch)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
   
})






module.exports = router