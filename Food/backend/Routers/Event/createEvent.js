const express = require('express');

const Router = express.Router();

const createEvent = require('../../Schemas/createEvent');

Router.post("/postEvent", (req,res,next)=>{
    const {myEmail,eventName,eventFood,eventQuantity,eventImage} = req.body;
    
    const eventCreation = new createEvent({
        email:myEmail,
        eventName,
        eventFood,
        eventQuantity,
        eventImage
    });

    eventCreation.save().then(result=>{
        console.log(result);
    }).catch(err=>{
        console.log(err);
    });
});

module.exports = Router;