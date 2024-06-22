import express from "express";
import productsRouter from "./routes/products.routes.js"
import dotenv from "dotenv";
dotenv.config();
const app=express();

app.use("/products", productsRouter);

const PORT=process.env.PORT || 4000;

app.listen(PORT, (req, res)=>{
    console.log(`Server Running on Port ${PORT}`);
})