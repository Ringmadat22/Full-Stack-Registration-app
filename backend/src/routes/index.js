import express from "express";
import { createProduct, getAllProducts } from "../controllers/product.js";

import {
    getAllProducts as getAllProductsController,
    createProduct as createProductController,
    getProductById,
    updateProduct,
    deleteProduct
} from "../controllers/product.js";

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', createProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;
