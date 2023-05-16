const express = require('express');

const Router = express.Router();

const AddFoodSchema = require('../../Schemas/addFood');

Router.post("/addFood", (req,res,next)=>{
    const { email,foodName,foodImageLink,foodQuantity } = req.body;

    const addFood = new AddFoodSchema({
        email,foodName,foodImageLink,foodQuantity 
    });

    addFood.save().then(result=>{
        res.sendStatus(200);
    }).catch(err=>{
        res.sendStatus(400);
    });
});

module.exports = Router;