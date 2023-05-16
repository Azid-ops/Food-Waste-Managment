const express = require('express');

const Router = express.Router();

const SignupSchema = require('../../Schemas/signup');

Router.post("/recoverPassword", (req,res,next)=>{
    const { email,phoneNumber } = req.body;
    SignupSchema.findOne({email:email}).then(user=>{
        if(user)
        {
            if(user.phoneNumber === phoneNumber)
            {
                SignupSchema.findOneAndUpdate({
                    email:email,
                    password:"123"
                }).then(result=>{
                    res.sendStatus(200);
                }).catch(err=>{
                    console.log(err);
                })
            }
            else
            {
                res.sendStatus(400);
            }
        }
        else
        {
            res.sendStatus(401);
        }
        
    })
    
});

module.exports = Router;