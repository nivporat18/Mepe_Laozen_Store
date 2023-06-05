const cloudinary = require("../../utils/cloudinary")
const router = require("express").Router()
const {isAdmin} = require('../../middleware/auth')
const IpadAirModel = require("../../models/ipad/IpadAirModel")


router.post("/",async(req,res)=>{
    const {name,desc, price, image} = req.body

    try {

        if(image){
         const uploadRes = await cloudinary.uploader.upload(image,{
            upload_preset:"mepelaozenStore"
           })

           if(uploadRes){
            const ipadAir = new IpadAirModel({
                name,
                desc,
                price,
                image: uploadRes
            })

            const saveIpad = await ipadAir.save()
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
        const ipadAir = await IpadAirModel.find()
        res.status(200).send(ipadAir)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
   
})






module.exports = router