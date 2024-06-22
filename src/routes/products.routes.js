import { Router} from "express"
import pool from "../products-database-config.js" 

const router=Router();

router.get("/", async(req, res)=>{
    try {
        const products=await pool.query("SELECT * FROM products");
        res.status(200).json({success:true,data: products})
    } catch (error) {
        console.log(error.message);
        res.status(500).json({success: false, data: error.message});  
    }
})




router.post("/", (req, res)=>{

})

router.patch("/:id", (req, res)=>{

})

router.delete("/:id", (req, res)=>{

})

export default router;