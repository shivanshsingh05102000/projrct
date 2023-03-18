const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../Models/User");
const { SuccessObj } = require("./responseMethod");
const Router = express.Router();
const passwordValidator = require('password-validator');
const registerEmail = require("../emails/registerEmail");
const schema = new passwordValidator();
const { sendEmail } = require("../email");

schema
.is().min(8)                                    
.is().max(100)                                 
.has().uppercase()                             
.has().lowercase()                              
.has().digits(2)                                
.has().not().spaces()                           
.is().not().oneOf(['Passw0rd', 'Password123']);



Router.post("/register", async (req, res) => {
  try {
    const {
      name,
      email,
      password,
    } = req.body;
    console.log(req.body);
    console.log(schema.validate(password))
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const user = new User({
      name,
      email,
      password: hashPassword,
    });

    await user.save();

    const mailOptions = {
      to: email,
      subject: "Welcome in LMS8",
      html: registerEmail(name, password),
    };

    await sendEmail(mailOptions);
    
    const data = new SuccessObj();
    data.message = "Register successfuly";

    res.status(201).json({ ...data });
  } catch (err) {
    console.log(err);
    res.json({ status: "error", error: err.message });
  }
});

module.exports = Router;
