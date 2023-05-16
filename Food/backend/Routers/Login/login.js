const express = require('express');

const Router = express.Router();

const SignupSchema = require('../../Schemas/signup');

Router.post("/login", (req,res,next)=>{
    const { email,password } = req.body;
    SignupSchema.findOne({email:email}).then(user=>{
        if(user)
        {
            console.log(user)
            if(user.password === password)
            {
                res.sendStatus(200);
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