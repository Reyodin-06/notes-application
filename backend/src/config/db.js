import mongoose from "mongoose";

export const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MONGO DB CONNECTED");
    }
    catch(error){
        console.error("Error while connecting to MONGO DB:",error);
        process.exit(1);//exit with failure
    }
}