import { Router} from "express"
import pool from "../products-database-config.js" 
import { getProductsById, getProducts } from "../controllers/products.controller.js"

const router=Router();

router.get("/", getProducts)

router.get("/:id", getProductsById)


router.post("/", (req, res)=>{

})

router.patch("/:id", (req, res)=>{

})

router.delete("/:id", (req, res)=>{

})

export default router;