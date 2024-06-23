import pool from "../products-database-config.js"

export const getProducts=async(req, res)=>{
    try {
        const products=await pool.query("SELECT * FROM products");
        res.status(200).json({success:true,data: products})
    } catch (error) {
        console.log(error.message);
        res.status(500).json({success: false, data: error.message});  
    }
}

export const getProductsById=async(req, res)=>{
    try {
        const id=parseInt(req.params.id);
        const product=await pool.query("SELECT * FROM products WHERE product_id=$1", [id]);
        if(product.rowCount === 0){
            res.status(404).json({success: false, data: "There's no such a product found"});
        }else{
            res.status(200).json({success: true, data: product});
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({success: false, data: error.message});  
    }
}

// export {
//     getProductsById,
// }