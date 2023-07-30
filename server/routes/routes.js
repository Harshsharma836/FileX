import express from 'express';
import { uploadImage , downloadImage } from '../controller/image-controller.js';
import upload from '../utils/upload.js'; // it is a middle ware used to extract file 

const router = express.Router();

router.post('/upload' , upload.single('file') ,  uploadImage);  // this is the main url as it has endpoint uploadImage

router.get('/file/:fileId', downloadImage);

export default router;