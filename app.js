const express=require('express');
const {google} = require('googleapis');
const app=express();
const googleapiRoute=require('./routes/googleapi');
app.set('view engine', 'ejs');
const facebookapiRoute=require('./routes/facebookapi');
//app.set('json replacer', replacer); // property transformation rules
app.set('json spaces', 2);	
app.get('/google',googleapiRoute);
app.get('/facebook',facebookapiRoute);

module.exports=app;