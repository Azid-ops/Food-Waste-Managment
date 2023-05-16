const express = require('express');

const Router = express.Router();

const createEvent = require('../../Schemas/createEvent');

Router.get("/getEvents", (req,res,next)=>{
    
    createEvent.find().then(result=>{
        res.send(result);
    }).catch(err=>{
        console.log(err);
    });
});

module.exports = Router;