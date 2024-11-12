import mongoose from "mongoose";

const connectDB = async() => {
    mongoose.connection.on('connected',() => {
        console.log('DB Connected');
        
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/ecommerce`)
}

// by this it will connect mongoose with atlas

export default connectDB;


