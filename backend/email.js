const nodemailer = require("nodemailer")
require('dotenv').config();

const transporter = nodemailer.createTransport({
  sendMail: true,
  host: 'smtp.gmail.com',
  port: 465,
  auth: {
    user: process.env.EMAIL_AUTH_USER,
    pass: process.env.EMAIL_AUTH_PASSWORD
  }
  });


  transporter.verify((error, success) => {
    if (error) {
        //if error happened code ends here
        console.error("gmail error", error)
    } else {
        //this means success
        console.log('Ready to send mail!', success)
    }
    })
  

const sendEmail = async (mailOptions) => {
    try {
      const mail = {
        from: "LMS8",
        ...mailOptions
      }
      return await transporter.sendMail(mail)
    } catch (error) {
      throw new Error(error)
    }
   
  }

  module.exports = {sendEmail}
  
 
  