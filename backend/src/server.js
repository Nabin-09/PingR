import '../instrument.js'
import express from "express";
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";
import { clerkMiddleware } from "@clerk/express"
import { functions, inngest } from "./config/inngest.js";
import {serve} from "inngest/express"
import chatRoutes from './routes/chat.route.js'

const app = express();


app.use(express.json());
app.use(clerkMiddleware())

app.get("/" , (req , res)=>{
     res.send("Hello World")
});

app.use('/api/inngest' , serve({client : inngest,  functions}))
app.use('/api/chat' , chatRoutes)



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
