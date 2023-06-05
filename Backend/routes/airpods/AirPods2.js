const cloudinary = require("../../utils/cloudinary")
const router = require("express").Router()
const {isAdmin} = require('../../middleware/auth')
const Airpods2Model = require("../../models/airpods/Airpods2Model")


router.post("/",async(req,res)=>{
    const {name,desc, price, image} = req.body

    try {

        if(image){
         const uploadRes = await cloudinary.uploader.upload(image,{
            upload_preset:"mepelaozenStore"
           })

           if(uploadRes){
            const airPods2 = new Airpods2Model({
                name,
                desc,
                price,
                image: uploadRes
            })

            const saveAirPods = await airPods2.save()
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
        const airPods2 = await Airpods2Model.find()
        res.status(200).send(airPods2)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
   
})






module.exports = router