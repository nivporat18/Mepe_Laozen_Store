const cloudinary = require("../../utils/cloudinary")
const ProductModel =  require("../../models/iphones/ProductModel")
const router = require("express").Router()
const {isAdmin} = require('../../middleware/auth')


router.post("/",async(req,res)=>{
    const {name,brand,desc, price, image} = req.body

    try {

        if(image){
         const uploadRes = await cloudinary.uploader.upload(image,{
            upload_preset:"mepelaozenStore"
           })

           if(uploadRes){
            const product = new ProductModel({
                name,
                brand,
                desc,
                price,
                image: uploadRes
            })

            const saveProduct = await product.save()
            res.status(200).send(saveProduct)
           }
        }
        
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
  
})


router.get("/",async(req,res)=>{

    try {
        const products = await ProductModel.find()
        res.status(200).send(products)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
   
})






module.exports = router