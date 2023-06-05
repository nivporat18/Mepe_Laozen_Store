const cloudinary = require("../../utils/cloudinary")
const router = require("express").Router()
const {isAdmin} = require('../../middleware/auth')
const AirPods3Model = require("../../models/airpods/Airpods3Model")


router.post("/",async(req,res)=>{
    const {name,desc, price, image} = req.body

    try {

        if(image){
         const uploadRes = await cloudinary.uploader.upload(image,{
            upload_preset:"mepelaozenStore"
           })

           if(uploadRes){
            const airPods3 = new AirPods3Model({
                name,
                desc,
                price,
                image: uploadRes
            })

            const saveAirPods = await airPods3.save()
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
        const airPods3 = await AirPods3Model.find()
        res.status(200).send(airPods3)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
   
})






module.exports = router