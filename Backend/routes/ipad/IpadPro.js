const cloudinary = require("../../utils/cloudinary")
const router = require("express").Router()
const {isAdmin} = require('../../middleware/auth')
const IpadProModel = require("../../models/ipad/IpadProModel")


router.post("/",async(req,res)=>{
    const {name,desc, price, image} = req.body

    try {

        if(image){
         const uploadRes = await cloudinary.uploader.upload(image,{
            upload_preset:"mepelaozenStore"
           })

           if(uploadRes){
            const ipadPro = new IpadProModel({
                name,
                desc,
                price,
                image: uploadRes
            })

            const saveIpad = await ipadPro.save()
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
        const ipadPro = await IpadProModel.find()
        res.status(200).send(ipadPro)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
   
})






module.exports = router