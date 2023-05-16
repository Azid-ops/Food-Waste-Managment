const express = require('express');

const Router = express.Router();

const AddFoodSchema = require('../../Schemas/addFood');

Router.get("/getUserItems/:email", (req,res,next)=>{
    const email = req.params.email;
    console.log(email);
    AddFoodSchema.find({email:email}).then(result=>{
        res.send(result);
    }).catch(err=>{
        console.log(err);
    });
});

module.exports = Router;