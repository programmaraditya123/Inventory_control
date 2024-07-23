const jwt = require('jsonwebtoken');


const IsSignIn = async (req,res,next) => {

    try {
        let token = req.header("Authorization");
        console.log("000000000",token)
        if(!token){
            return res.status(401).json({message:"Token is not present"})
        }

        if(token.startsWith("Bearer")){
            token = token.slice(7)
        }

        const decode = jwt.verify(token,"aditya");
        req.user = decode;

        next();
        
    } catch (error) {
        console.log(error);
        
    }
};


module.exports = IsSignIn;