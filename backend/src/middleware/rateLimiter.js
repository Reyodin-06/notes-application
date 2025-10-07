import rateLimitObj from "../config/upstash.js" 

const rateLimiter = async ( req , res , next )=>{
    try{
        const {success} = await rateLimitObj.limit("this-user");//(limit("userid"))-limit per user
        if(!success){
            return res.status(429).json({message:"Too many requests"});
        }
        next();
    }
    catch(error){
        console.log("Error in rate limit:",error);
        next(error);
    }
}

export default rateLimiter;
