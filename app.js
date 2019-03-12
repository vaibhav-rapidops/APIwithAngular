// const express=require('express');
// const {google} = require('googleapis');
// let bodyParser=require('body-parser');
// var cors = require('cors')
// const googleapiRoute=require('./routes/googleapi');
// const facebookapiRoute=require('./routes/facebookapi');
// app=express();

// 
// // app.get('/',( req,res ) => {
// //     res.redirect("http://localhost:4200");
// // });


// // app.get('/',(req,res)=>{
// //     res.send("hello");
// // });

// app.get('/',googleapiRoute);

// app.get('/facebook',facebookapiRoute);


// module.exports=app;


const express=require('express');
const {google} = require('googleapis');
const app=express();
const cors = require('cors')
const googleapiRoute=require('./routes/googleapi');
app.set('view engine', 'ejs');
const facebookapiRoute=require('./routes/facebookapi');
//app.set('json replacer', replacer); // property transformation rules
app.set('json spaces', 2);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use('/google',googleapiRoute);
app.use('/facebook',facebookapiRoute);

module.exports=app;