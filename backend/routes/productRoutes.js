import express from 'express';
const router = express.Router();
import { getProducts,getProductById } from '../controllers/productController.js';


router.route('/').get(getProducts); // Fetch all products
router.route('/:id').get(getProductById); // Fetch single product by ID


export default router;