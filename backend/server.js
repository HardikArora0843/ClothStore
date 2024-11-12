// TO RUN SERVER USE npm ru server

import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

// APP CONFIG

const app = express();
const port = process.env.PORT || 4000
connectDB()
connectCloudinary();
// here we are using environment variable , this will check that if port is available then it will run or it will run on port 4000


//MIDDLEWARE

// To add middleware we will use app.use(), by express.json() what ever request we will pass that will passed in json format, by adding cors we can access the backend with any ip

app.use(express.json())
app.use(cors())
   

// API ENDPOINTS

app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)



app.get('/', (req,res) => {
    res.send("API WORKING")
})

// whenever we run on 4000 then it will send api working

app.listen(port, () => console.log('Server started on PORT: ' + port))


