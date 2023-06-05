const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")


app.use(express.json({limit : 52428800}))
app.use(express.urlencoded({limit: '25mb'}));
app.use(cors())
dotenv.config()


const register = require("./routes/Register")
app.use("/api/register",register)

const login = require("./routes/Login")
app.use("/api/login",login)

const stripe = require("./routes/Stripe")
app.use("/api/stripe",stripe)

const iphone11 = require("./routes/iphones/Products")
app.use("/api/iphone11",iphone11)


const iphone12 = require("./routes/iphones/Iphone12")
app.use("/api/iphone12",iphone12)


const iphone13 = require("./routes/iphones/Iphone13")
app.use("/api/iphone13",iphone13)


const iphone14 = require("./routes/iphones/Iphone14")
app.use("/api/iphone14",iphone14)



const airPodsPro = require("./routes/airpods/AirPodsPro")
app.use("/api/airpodspro",airPodsPro)

const airPods2= require("./routes/airpods/AirPods2")
app.use("/api/airpods2",airPods2)


const airPods3 = require("./routes/airpods/AirPods3")
app.use("/api/airpods3",airPods3)


const airPodsProMax = require("./routes/airpods/AirPodsProMax")
app.use("/api/airpodspromax",airPodsProMax)




const ipadMini = require("./routes/ipad/IpadMini")
app.use("/api/ipadmini",ipadMini)

const ipadPro = require("./routes/ipad/IpadPro")
app.use("/api/ipadpro",ipadPro)

const ipadAir = require("./routes/ipad/IpadAir")
app.use("/api/ipadair",ipadAir)


const macbookPro = require("./routes/macbook/MacbookPro")
app.use("/api/macbookpro",macbookPro)

const macbookAir = require("./routes/macbook/MacbookAir")
app.use("/api/macbookair",macbookAir)

const macMini = require("./routes/macbook/MacMini")
app.use("/api/macmini",macMini)

const Imac = require("./routes/macbook/Imac")
app.use("/api/imac",Imac)



const watch6 = require("./routes/watch/AppleWatch6")
app.use("/api/applewatch6",watch6)

const watch7 = require("./routes/watch/AppleWatch7")
app.use("/api/applewatch7",watch7)

const watch8 = require("./routes/watch/AppleWatch8")
app.use("/api/applewatch8",watch8)

const watchUltra = require("./routes/watch/AppleWatchUltra")
app.use("/api/applewatchultra",watchUltra)



app.get("/",(req,res)=>{
    res.send("Welcome to Mepelaozen Shope API....")
})






const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`Server is running on PORT http://localhost:${PORT}`)
})

const URL_DB = process.env.URL_DB
mongoose.connect(URL_DB,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("MongoDB connection")
}).catch((e)=>{
    console.log(`Error mONGOdb ${e}`)
})