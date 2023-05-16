const express = require('express');

const Router = express.Router();

const SignupSchema = require('../../Schemas/signup');

Router.get("/accountDetails/:email", (req,res,next)=>{
    const email = req.params.email;
    SignupSchema.findOne({email:email}).then(result=>{
        res.send(result);
    }).catch(err =>{
        console.log(err);
    });
});

module.exports = Router;