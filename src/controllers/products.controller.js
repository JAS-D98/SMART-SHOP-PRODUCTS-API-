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
        const product=await pool.query("SELECT * FROM products WHERE productId=$1", [id]);
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
        const {productThumbnail,productTitle,productDescription,productCost,onOffer}=req.body;
        const addProduct=await pool.query("INSERT INTO products (productThumbnail, productTitle, productDescription, productCost, onOffer) VALUES($1, $2, $3, $4, $5)", [productThumbnail,productTitle,productDescription,productCost,onOffer])
        res.status(201).json({success: true, data: "Product has been successfully added"})
    } catch (error) {
        res.status(404).json({success: false, data: error.message});  
    }
}

export const updateProducts=async(req, res)=>{
    try {
        const id=parseInt(req.params.id)
        const {productThumbnail,productTitle,productDescription,productCost,onOffer}=req.body;
        const products=await pool.query("UPDATE products SET productThumbnail=$1, productTitle=$2, productDescription=$3, productCost=$4, onOffer=$5 WHERE productId=$6",[productThumbnail,productTitle,productDescription,productCost,onOffer, id]);
        res.status(201).json({success: true, data: "product updated successfully"});

    } catch (error) {
        res.status(500).json({success: false, data: error.message});
    }
}

export const removeProduct=async(req, res)=>{
    try {
        const id=parseInt(req.params.id);
        const productId=await pool.query("DELETE FROM products WHERE productId=$1",[id]);
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