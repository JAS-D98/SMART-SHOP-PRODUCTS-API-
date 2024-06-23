import { Router} from "express"
import pool from "../products-database-config.js" 
import { getProductsById, getProducts, addProducts, removeProduct, updateProducts } from "../controllers/products.controller.js"

const router=Router();

// Route for getting products
router.get("/", getProducts)

// Route for getting products by id
router.get("/:id", getProductsById)

// Route for adding products
router.post("/", addProducts)

// Route for updating products
router.patch("/:id", updateProducts);

// Route for removing products by id
router.delete("/:id", removeProduct)

export default router;