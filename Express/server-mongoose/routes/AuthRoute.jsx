const express = require('express')
const router = express.Router();
const User = require('../models/UserModel')
const bcrypt=require('bcrypt')
router.post('/register', async(req,res)=>{
    try{
//const ProductData=new products(req.body)
const{name,email,phone,password}=req.body
if(!name || !email|| !phone || !password){
    res.status(401).json({message:"All fields required"})
}
//TODO : Add User Email & Phone Validation

//Email
const existingemail=await Users.findOne({email})
if(existingemail)
{
    return res.status(500).json({message: 'User with ${email} already exists !'})
}
//phone
const existingphone=await Users.findOne({phone})
if(existingephone)
{
    return res.status(500).json({message: 'User with ${phone} already exists !'})
}
const salt=await bcrypt.genSalt(10)
const hashedpassword=await bcrypt.hash(password.salt)
const newuser=new User({
    name,
    email,
    phone,
    password:hashedpassword

})
router.post('/login', async (req, res) => {
    try {
        //const newuser = new Users(req.body)
        const {  email, password } =req.body
        if ( !email ||  !password) {
            return res.status(401).json({ message: "All fields required" })
        }

        //TODO : Add User Email & Phone Validation
        // const EmailCheck = await Users.findOne({ email: email })
