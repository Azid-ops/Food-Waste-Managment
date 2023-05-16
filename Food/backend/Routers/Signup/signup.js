const express = require('express');

const Router = express.Router();

const SignupSchema = require('../../Schemas/signup');

Router.post("/signup", (req,res,next)=>{
    const {fName,email,password,reType,phoneNumber} = req.body;
    const signUp = new SignupSchema({
        fName,
        email,
        password,
        reType,
        phoneNumber,
        verified:"no",
        otp:"",
        accountType:"",
        account:""
    });

    SignupSchema.findOne({email:email}).then(user=>{
        if(!user)
        {
            if(
                email.includes("@gmail.com") ||
                email.includes("@yahoo.com") ||
                email.includes("@hotmail.com")
            )
            {
                if(password.length > 5)
                {
                    if(password === reType)
                    {
                        signUp.save().then(result=>{
                            res.sendStatus(200);
                        }).catch(err=>{
                            console.log(err);
                        });
                    }
                    else
                    {
                        res.sendStatus(403);
                    }
                }
                else
                {
                    res.sendStatus(402);
                }
            }
            else
            {
                res.sendStatus(401);
            }
        }
        else
        {
            res.sendStatus(400);
        }
    })
});

module.exports = Router;