const express = require('express');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const addFood = new Schema({
    email:{
        type:String,
        required:"true"
    },
    foodName:{
        type:String,
        required:"true"
    },
    foodImageLink:{
        type:String,
        required:"true"
    },
    foodQuantity:{
        type:String,
        required:"true"
    },
});

module.exports = mongoose.model("Add Food", addFood);