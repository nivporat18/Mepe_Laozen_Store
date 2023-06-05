const cloudinary = require("../../utils/cloudinary")
const router = require("express").Router()
const {isAdmin} = require('../../middleware/auth')
const AirPodsProMaxModel = require("../../models/airpods/AirpodsProMaxModel")


router.post("/",async(req,res)=>{
    const {name,desc, price, image} = req.body

    try {

        if(image){
         const uploadRes = await cloudinary.uploader.upload(image,{
            upload_preset:"mepelaozenStore"
           })

           if(uploadRes){
            const airPodsProMax = new AirPodsProMaxModel({
                name,
                desc,
                price,
                image: uploadRes
            })

            const saveAirPods = await airPodsProMax.save()
            res.status(200).send(saveAirPods)
           }
        }
        
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
  
})


router.get("/",async(req,res)=>{

    try {
        const airPodsProMax = await AirPodsProMaxModel.find()
        res.status(200).send(airPodsProMax)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
   
})






module.exports = router