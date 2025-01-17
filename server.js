import express from "express"

import dotenv from "dotenv"
 import morgan from "morgan"
import connectDB from "./config/db.js"
import authRoutes from "./routes/authRoute.js"
import cors from "cors"
import categoryRoutes from "./routes/categoryRoutes.js"
import productRoutes from './routes/productRoutes.js'
const app=express()

// dotENV config
dotenv.config()

//Databse Config
connectDB()

//middlewares
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

// routes
app.use("/api/v1/auth",authRoutes)
app.use('/api/v1/category',categoryRoutes)
app.use('/api/v1/product',productRoutes)


//Get request
app.get('/',(req,res)=>{
    return res.send({
        message:"welcome to ecommers app"
    })
})

//PORT

const PORT=process.env.PORT || 8080;

app.listen(PORT,(err)=>{
    console.log(`server runnimg on ${process.env.DEV_MODE} mode on PORT : ${PORT}`.bgCyan.white);
})   