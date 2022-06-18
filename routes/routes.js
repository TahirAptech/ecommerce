import express from 'express';
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from '../controllers/productController';
import upload from '../utils/multer';

const router = express.Router();

router.get('/api/product/', getProducts);
router.post('/api/product/', upload.any("picture"), createProduct);
router.get('/api/product/:id', getProduct);
router.put('/api/product/:id', upload.any("picture"), updateProduct);
router.delete('/api/product/:id', deleteProduct);





// router.post("/api/upload/", upload.any("picture"), async (req, res) => {
//     const path = req.files[0].path;
//     try {
//         const result = await cloudinary.uploader.upload(path);
//         console.log(result.secure_url, result.public_id);
//         res.send(result.secure_url)
//     } catch (error) {
//         res.json({ message: error });
//     }
// });


// router.delete("/api/uploadDelete/:id", async (req, res) => {
//     try {
//         const result = await cloudinary.v2.uploader.destroy("j1al5ehn7yyxlxjjor0k");
//         console.log(result);
//         res.send(result);
//     } catch (error) {
//         res.json({ message: error });
//     }
// })


export default router;