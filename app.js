const express=require('express');
const {google} = require('googleapis');
const app=express();
const cors=require('cors');
const googleapiRoute=require('./routes/googleapi');
const facebookapiRoute=require('./routes/facebookapi');
const corsOption={
  origin:['http://localhost:4200']
}
app.use(cors(corsOption));
app.use('/google',googleapiRoute);
app.use('/facebook',facebookapiRoute);

module.exports=app;