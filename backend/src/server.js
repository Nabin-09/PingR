import express from "express";
import { ENV } from "./config/env.js";

const app = express();

const PORT = process.env.PORT;
app.get("/" , (req , res)=>{
     res.send("Hello World")
})
app.listen(ENV.PORT , ()=>{
    console.log("Server running on port:", ENV.PORT);
})