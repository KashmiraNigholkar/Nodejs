const express=require('express')
const app=express();
const reqFilter=require('./middleware')
const route=express.Router();

//  console.log("reqFilter")
route.use(reqFilter)

// app.use(reqFilter);
app.get('/',(resp,res)=>{
    resp.send('welcome to Home Page.')
});

app.get('/users',(resp,res)=>{
    resp.send('welcome to users Page.')
});
route.get('/about',reqFilter,(resp,res)=>{
    resp.send('welcome to about Page.')
});
route.get('/home',reqFilter,(resp,res)=>{
    resp.send('welcome to home Page.')
});
app.use('/',route)
app.listen(4000);
