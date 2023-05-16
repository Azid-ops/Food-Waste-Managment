const express = require('express');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const createEvent = new Schema({
    email:{
        type:String,
        required:"true"
    },
    eventName:{
        type:String,
        required:"true"
    },
    eventFood:{
        type:String,
        required:"true"
    },
    eventQuantity:{
        type:String,
        required:"true"
    },
    eventImage:{
        type:String,
        required:"true"
    },
});

module.exports = mongoose.model("Create Event", createEvent);