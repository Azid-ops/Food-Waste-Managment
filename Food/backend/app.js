//Importing Packages
const express = require('express');
const mongoose = require('mongoose');

//Importing Files
const Signup = require('./Routers/Signup/signup');
const Verification = require('./Routers/Verification/verification');
const VerifyOTP = require('./Routers/Verification/verifyOTP');
const Login = require('./Routers/Login/login');
const Recovery = require('./Routers/Recovery/recoverPassword');
const AccountType = require('./Routers/Account/accountType');
const Account = require('./Routers/Account/accountContinue');
const AccountDetails = require('./Routers/Account/accountDetails');
const AddFood = require('./Routers/AddFood/addFood.js');
const FoodItems = require('./Routers/AddFood/getFood');
const GetUserItems = require('./Routers/AddFood/userItems');
const CreateEvent = require("./Routers/Event/createEvent");
const GetMyEvents = require("./Routers/Event/getMyEvents");
const BrowseEvents = require('./Routers/Event/browseEvents');

const app = express();

app.use(express.json());

app.use(Signup);

app.use(Verification);

app.use(VerifyOTP);

app.use(Login);

app.use(Recovery);

app.use(AccountType);

app.use(Account);

app.use(AccountDetails);

app.use(AddFood);

app.use(FoodItems);

app.use(GetUserItems);

app.use(CreateEvent);

app.use(BrowseEvents);

app.use(GetMyEvents);

mongoose.connect("mongodb+srv://Mahad:Mahad@cluster0.btoqm.mongodb.net/FoodWaste").then(connect=>{
    app.listen(5000);
})
