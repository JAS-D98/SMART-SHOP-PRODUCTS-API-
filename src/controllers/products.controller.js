import pool from "../products-database-config.js"

export const getProducts=async(req, res)=>{
    try {
        const products=await pool.query("SELECT * FROM products");
        if(products.rowCount === 0){
            res.status(404).json({success: false, data: "No products found"})
        }else{
            res.status(200).json({success:true,data: products})
        }
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

export const addProducts=async(req, res)=>{
    try {
        const {product_thumbnail, product_title, product_description, product_cost, on_offer}=req.body;
        const addProduct=await pool.query("INSERT INTO products (product_thumbnail, product_title, product_description, product_cost, on_offer) VALUES($1, $2, $3, $4, $5)", [product_thumbnail, product_title, product_description, product_cost, on_offer])
        res.status(201).json({success: true, data: "Product has been successfully added"})
    } catch (error) {
        res.status(404).json({success: false, data: error.message});  
    }
}

export const updateProducts=async(req, res)=>{
    try {
        const id=parseInt(req.params.id)
        const {product_thumbnail, product_title, product_description, product_cost, on_offer}=req.body;
        const products=await pool.query("UPDATE products SET product_thumbnail=$1, product_title=$2, product_description=$3, product_cost=$4, on_offer=$5 WHERE product_id=$6",[product_thumbnail, product_title, product_description, product_cost, on_offer, id]);
        res.status(201).json({success: true, data: "product updated successfully"});

    } catch (error) {
        res.status(500).json({success: false, data: error.message});
    }
}

export const removeProduct=async(req, res)=>{
    try {
        const id=parseInt(req.params.id);
        const productId=await pool.query("DELETE FROM products WHERE product_id=$1",[id]);
        if (productId.rowCount === 0) {
            res.status(404).json({success: false, data: "Product not found for deletion"}); 
        } else {
            res.status(200).json({success: true, data: "Product has been successfully deleted"})
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({success: false, data: error.message});  
    }
}