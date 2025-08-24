import { generateStreamToken } from "../config/stream.js"




export const getStreamToken = async (req , res)=>{
    try{
        const token = await generateStreamToken(req.auth().userId);
        res.status(200).json({token})
    }catch(err){
        console.log("Error generating Stream token" , err);
        res.status(500).json({
            message : "Failed to generate Stream Token",
        })
    }
}