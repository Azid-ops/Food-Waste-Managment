const express = require('express');

const Router = express.Router();

const SignupSchema = require('../../Schemas/signup');

Router.post("/selectAccount", (req,res,next)=>{
    const {email,account} = req.body;

    SignupSchema.findOneAndUpdate(
        {email:email},
        {$set:{accountType:account,
        account:true}}
    ).then(result=>{
        res.sendStatus(200);
    }).catch(err => {
        console.log(err);
    });
    
});

module.exports = Router;