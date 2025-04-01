import express from 'express';
import { createProduct, getProducts, updateProduct, deleteProduct } from '../controller/productController';
import { authenticateJWT } from '../middlewear/auth';

const productRouter = express.Router();

productRouter.post('/', authenticateJWT, createProduct);
productRouter.get('/', getProducts);
productRouter.put('/:id', authenticateJWT, updateProduct);
productRouter.delete('/:id', authenticateJWT, deleteProduct);

export default productRouter;
