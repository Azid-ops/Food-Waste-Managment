const express = require('express');

const Router = express.Router();

const SignupSchema = require('../../Schemas/signup');

Router.post("/checkAccountType", (req,res,next)=>{
    const {email} = req.body;
    
    SignupSchema.findOne({email:email}).then(result=>{
        if(result)
        {
            if(result.accountType === "Restaurant" || result.accountType === "NGO")
            {
                res.sendStatus(200);
            }
            else
            {
                res.sendStatus(201);
            }
        }
    })
});

module.exports = Router;