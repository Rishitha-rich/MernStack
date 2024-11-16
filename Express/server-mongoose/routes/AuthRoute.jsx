const express = require('express')
const router = express.Router();
const Users = require('../models/UsersModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
router.post('/register', async (req, res) => {
    try {
        // const newuser = new Users(req.body)
        const { name, email, phone, password } = req.body
        if (!name || !email || !phone || !password) {
            return res.status(401).json({ message: "All fields required" })
        }

        //TODO : Add User Email & Phone Validation

        //Email
        const exisitingemail = await Users.findOne({ email })
        if (exisitingemail) {
            return res.status(500).json({ message: `User with ${email} already exists !` })
            return res.status(409).json({ message: `User with ${email} already exists !` })
        }

        //Phone
        const exisitingphone = await Users.findOne({ phone })
        if (exisitingphone) {
            return res.status(500).json({ message: `User with ${phone} already exists !` })
            return res.status(409).json({ message: `User with ${phone} already exists !` })
        }
        const salt = await bcrypt.genSalt(10)
        const hashedpassword = await bcrypt.hash(password, salt)