import express from "express";

import ProductController from "../controllers/ProductController";

const router = express.Router();

router.get('/nome', ProductController.getProductByName)

router.get('/:id', ProductController.getProduct);

router.get('/', ProductController.getProducts);

router.post('/', ProductController.postProduct);

router.put('/:id', ProductController.putProduct);

router.put('/', ProductController.putProductEstoque);

router.delete('/:id', ProductController.deleteProduct);

export default router;