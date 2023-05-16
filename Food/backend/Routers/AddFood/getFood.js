const express = require('express');

const Router = express.Router();

const AddFoodSchema = require('../../Schemas/addFood');

Router.get("/getFoodItems/:email", (req,res,next)=>{
    const email = req.params.email;
    AddFoodSchema.find().then(result=>{
        res.send(result);
    }).catch(err=>{
        console.log(err);
    });
});

module.exports = Router;