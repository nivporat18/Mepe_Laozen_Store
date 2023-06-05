const cloudinary = require("../../utils/cloudinary")
const router = require("express").Router()
const {isAdmin} = require('../../middleware/auth')
const MacbookProModel = require("../../models/macbook/MacbookProModel")


router.post("/",async(req,res)=>{
    const {name,desc, price, image} = req.body

    try {

        if(image){
         const uploadRes = await cloudinary.uploader.upload(image,{
            upload_preset:"mepelaozenStore"
           })

           if(uploadRes){
            const macbook = new MacbookProModel({
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
        const macbookPro = await MacbookProModel.find()
        res.status(200).send(macbookPro)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
   
})






module.exports = router