const cloudinary = require("../../utils/cloudinary")
const router = require("express").Router()
const {isAdmin} = require('../../middleware/auth')
const Iphone14Model = require("../../models/iphones/Iphone14Model")


router.post("/",async(req,res)=>{
    const {name,desc, price, image} = req.body

    try {

        if(image){
         const uploadRes = await cloudinary.uploader.upload(image,{
            upload_preset:"mepelaozenStore"
           })

           if(uploadRes){
            const iphone14 = new Iphone14Model({
                name,
                desc,
                price,
                image: uploadRes
            })

            const saveIphone = await iphone14.save()
            res.status(200).send(saveIphone)
           }
        }
        
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
  
})


router.get("/",async(req,res)=>{

    try {
        const iphone14 = await Iphone14Model.find()
        res.status(200).send(iphone14)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
   
})






module.exports = router