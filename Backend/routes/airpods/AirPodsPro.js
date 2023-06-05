const cloudinary = require("../../utils/cloudinary")
const router = require("express").Router()
const {isAdmin} = require('../../middleware/auth')
const AirPodsProModel = require("../../models/airpods/AirpodsProModel")


router.post("/",async(req,res)=>{
    const {name,desc, price, image} = req.body

    try {

        if(image){
         const uploadRes = await cloudinary.uploader.upload(image,{
            upload_preset:"mepelaozenStore"
           })

           if(uploadRes){
            const airPodsPro = new AirPodsProModel({
                name,
                desc,
                price,
                image: uploadRes
            })

            const saveAirPods = await airPodsPro.save()
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
        const airPodsPro = await AirPodsProModel.find()
        res.status(200).send(airPodsPro)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
   
})






module.exports = router