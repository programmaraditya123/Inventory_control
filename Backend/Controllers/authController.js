const { comparePassword, hashPassword } = require('../helpers/authHelper');
const AdminMidel = require('../Models/AdminMidel');
const jwt = require('jsonwebtoken');


const homePageController = async (req,res) => {
    try {
        await res.send("this is auth controller");

        
    } catch (error) {
        console.log(error)
        
    }
};

const registerUserController = async (req,res) => {
     
    try {
        const { name , email, password } = req.body;

        console.log("++++++++++++++",req.body);

        if(!name){
            return res.send("Name is Required");
        }
        if(!email){
            return res.send("Email is Required");
        }
        if(!password){
        return res.send("Password is Required")
        }
        //check User
        const existUser = await AdminMidel.findOne({email});
        //already existing user
        if(existUser){
            return res.status(200).json({
                success:false,
                message:'User Already registered'
            })
        }
        //hash password of the registered user
        const hashedPassword = await hashPassword(password);

        //save
        const user = await new AdminMidel({name,email,password:hashedPassword}).save();
        res.status(200).send({
            success:true,
            message:'User registered Successfully',
            user
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message:'Error in Registration',
            error
        })
        
    }
};



const signinUserController = async (req,res) => {
    try {
        const {email,password} = req.body;
         

        //validation of email and password
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:'Email and Password are Required'
            })
        }


        //check user
        const user = await AdminMidel.findOne({email});
        if(!user){
            return res.status(404).json({
                success:false,
                message:'Email is Not Registered'
            })
        }
        
        
        const match = await comparePassword(password,user.password);
        //console.log(match,"555555555555555")
        if(!match){
            return res.status(401).json({
                success:false,
                message:'Password is Wrong'
            })
        }


        const token = await jwt.sign({_id:user._id},"aditya",{expiresIn:"7d"})
            res.status(201).send({
                success:true,
                message:'User Logged In Successfully',
                user:{
                    user:user.name,
                    email:user.email,
                    password:user.password,
                },
                token,
            });
        
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message:'Error in Signin',
            error
        })
        
    }
};


module.exports = {homePageController,registerUserController,signinUserController};