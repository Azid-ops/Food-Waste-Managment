const express = require('express');

const Router = express.Router();

const createEvent = require('../../Schemas/createEvent');

Router.get("/getMyEvents/:email", (req,res,next)=>{
    const email = req.params.email;
    createEvent.find({email:email}).then(result=>{
        res.send(result);
    }).catch(err=>{
        console.log(err);
    });
});

module.exports = Router;