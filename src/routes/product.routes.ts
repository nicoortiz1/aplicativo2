import { Router } from "express";
import * as productController from "../controllers/product.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import * as productValidators from "../middlewares/validators/productValidators";

const router = Router().use(authMiddleware);

// OBTENER TODOS LOS PRODUCTOS
router.get("/", productController.listProducts);

// CREAR UN PRODUCTO
router.post("/", productValidators.createProductValidators, productController.addProduct);

// OBTENER UN PRODUCTO
router.get("/:id", productValidators.mongoIdValidator, productController.getProduct);

// ELIMINAR UN PRODUCTO
router.delete("/:id", productValidators.mongoIdValidator, productController.deleteProduct);

export default router;
