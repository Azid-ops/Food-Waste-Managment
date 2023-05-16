const express = require('express');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const registerUser = new Schema({
    fName:{
        type:"String",
        required:true
    },
    email:{
        type:"String",
        required:true
    },
    password:{
        type:"String",
        required:true
    },
    reType:{
        type:"String",
        required:true
    },
    phoneNumber:{
        type:"String",
        required:true
    },
    verified:{
        type:"String",
        required:true
    },
    otp:{
        type:"String"
    },
    accountType:{
        type:"String"
    },
    account:{
        type:"String"
    }
});

module.exports = mongoose.model("registerUser", registerUser);