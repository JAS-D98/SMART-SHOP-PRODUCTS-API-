import { Router} from "express"
import pool from "../products-database-config.js" 
import { getProductsById, getProducts, addProducts, removeProduct } from "../controllers/products.controller.js"

const router=Router();

router.get("/", getProducts)

router.get("/:id", getProductsById)


router.post("/", addProducts)

router.patch("/:id", (req, res)=>{

})

router.delete("/:id", removeProduct)

export default router;