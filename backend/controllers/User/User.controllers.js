const bcrypt = require("bcrypt");
const UserModel = require("../../model/user.module");
const { registerValidation } = require("../../validation/registerValidation");

const Signup= async (req, res)=>{
    try {
        // console.log(req.body);
        const result =await registerValidation.validateAsync(req.body);
        // console.log(result);
        const {username, email, password} = result;
        const user = await UserModel.findOne({email});

        if(user){
            res.status(400).json({message:"email already exists"});
        }

        const hassPassword = await bcrypt.hash(password,10);

        const newuser= new UserModel({
            username,
            email,
            password:hassPassword,
        })
        const response= await newuser .save();
        res.status(201).json({message:"Signup successfully !",response});

    } catch (error) {
        console.log(error);
        res.status(500).json({message:"internal server error", error});
    }
};

const Login = async (req, res)=>{
    try {
        const {email, password}=req.body;

        const user= await UserModel.findOne({email});

        if(!user){
            res.status(400).json({message:"invalid credentials"})
        };

        const isPasswordCorrect= await bcrypt.compare(password , user.password);

        if(!isPasswordCorrect){
            res.status(400).json({message:"invalid credentials"})
        }

        res.status(200).json({message:"login successfully"})

    } catch (error) {
        console.log(error)
        res.status(500).json({message:"error in login"})
    }
}
const Logout = async (req, res)=>{
    try {
        res.status(200).json({message:"logout successfully"})
    } catch (error) {
        res.status(500).json({meassage:"falide to logout"})
    }
}
module.exports= {Signup , Login, Logout};