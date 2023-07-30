import mongoose from 'mongoose';

import dotenv from 'dotenv';
dotenv.config();
const URL = process.env.MONGODB_URL;
const DBconnection = async()=>{
    try{
        await mongoose.connect(URL , {useNewUrlParser : true })
        console.log('database connected successfully');
    }
    catch(error){
        console.error("Error while Connecting" , error.message);
    }
}

export default DBconnection;
