const cloudinary = require("../../utils/cloudinary")
const router = require("express").Router()
const {isAdmin} = require('../../middleware/auth')
const AppleWatch6Model = require("../../models/watch/AppleWatch6Model")


router.post("/",async(req,res)=>{
    const {name,desc, price, image} = req.body

    try {

        if(image){
         const uploadRes = await cloudinary.uploader.upload(image,{
            upload_preset:"mepelaozenStore"
           })

           if(uploadRes){
            const appleWatch = new AppleWatch6Model({
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
        const appleWatch = await AppleWatch6Model.find()
        res.status(200).send(appleWatch)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
   
})






module.exports = router