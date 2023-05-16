//Importing Packages
const express = require('express');
const Router = express.Router();

//Importing Files
const signUpSchema = require('../../Schemas/signup');

//Twilio Credientials
const accountSid = "AC7f3b755a63c16f5f7eb2550edd763c79";
const authToken = "5e4adc20f981a0b43ff1d9fe2165e80e";
const verifySid = "VA5c62af28ed034a5586723bb93f255273";
const client = require("twilio")(accountSid, authToken);

Router.post("/verifyOTP", (req,res,next)=>{
    const { verifiedNumber,verifiedEmail,otp } = req.body;
    console.log(verifiedNumber,verifiedEmail,otp);

    client.verify.v2.services(verifySid)
    .verificationChecks.create({
        to:verifiedNumber,
        code:otp
    }).then(verificationOTP=>{
        verificationOTP.status === "approved" ? (
            res.sendStatus(200),
            signUpSchema.findOneAndUpdate({
                email:verifiedEmail,
                verified:"yes"
            }).then(result=>{
                console.log("ok")
            })
        ):null;
        verificationOTP.status === "pending" ? ( 
            res.sendStatus(401)
        ):null
    }).catch(err =>{
        console.log(err);
    });

});

module.exports = Router;