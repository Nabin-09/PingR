import express from "express";
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";
import { clerkMiddleware } from "@clerk/express"
import { functions, inngest } from "./config/inngest.js";
import {serve} from "inngest/express"

const app = express();


app.use(express.json());
app.use(clerkMiddleware())

app.use('/api/inngest' , serve({client : inngest,  functions}))

const PORT = process.env.PORT;
app.get("/" , (req , res)=>{
     res.send("Hello World")
});

const startServer = async ()=>{
    try {
        await connectDB();
        if(ENV.NODE_ENV !== "production"){
           app.listen(ENV.PORT , ()=>{
            console.log("Server started on PORT : " , ENV.PORT);
           });
        }
    }catch(error){
        console.error("Error starting the server : ", error);
        process.exit(1);
    }
};

startServer();

export default app;
