// const Pool= require("pg").Pool;
import dotenv from "dotenv";
dotenv.config();

import pkg from "pg"
const { Pool }=pkg;

const pool=new Pool({
    user:process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWORD,
    host:process.env.DATABASE_HOST,
    port:process.env.DATABASE_PORT,
    database:process.env.DATABASE,
});

export default pool;