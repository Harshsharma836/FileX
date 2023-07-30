import fileSchemaAndModel from "../models/fileSchemaValidation.js";

export const uploadImage= async (request , responce ) =>{
    const fileobj = {
        path : request.file.path,
        name : request.file.originalname
    }
    try{
        const file = await fileSchemaAndModel.create(fileobj); // It save data in mongodb
        console.log(file);
        responce.status(200).json({path : `https://filesx-1gd1.onrender.com/file/${file._id}` })
    }
    catch(error){
        console.log("dsjdnsdjsjs Emergency");
        responce.status(500).json({error : error.message})
    }
}

export const downloadImage = async(request , responce) =>{
    try{
        const file = await fileSchemaAndModel.findById(request.params.fileId);
        file.downloadContent++;
        await file.save();
        responce.download(file.path , file.name);  
        
    }
    catch(error){
        console.log("Problem")
        console.error(error.message);
        return responce.status(500).json({error : error.message});
    }
    console.log()
}
