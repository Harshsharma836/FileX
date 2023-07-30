import mongoose from 'mongoose';

import dotenv from 'dotenv';
dotenv.config();
const URL = process.env.MONGODB_URL;
const DBconnection = async()=>{
    // const MONGODB_URl = `mongodb+srv://user:1234@cluster0.xclcel7.mongodb.net/?retryWrites=true&w=majority`
    //const MONGODB_URl = `mongodb://user:1234Harsh@ac-byrgcgr-shard-00-00.xclcel7.mongodb.net:27017,ac-byrgcgr-shard-00-01.xclcel7.mongodb.net:27017,ac-byrgcgr-shard-00-02.xclcel7.mongodb.net:27017/?ssl=true&replicaSet=atlas-2xkknq-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL , {useNewUrlParser : true })
        console.log('database connected successfully');
    }
    catch(error){
        console.error("Error while Connecting" , error.message);
    }
}

export default DBconnection;