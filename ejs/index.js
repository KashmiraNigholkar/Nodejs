const express=require('express');
const path=require('path');
const app=express();
const publicPath=path.join(__dirname,'public')
app.set('view engine ','ejs')
app.get('',(_,resp)=>{
    resp.sendFile(`${publicPath}/index.html`)
});
app.get('/profile',(_,resp)=>{
   resp.render('profile');
});
app.get('/about',(_,resp)=>{
    resp.sendFile(`${publicPath}/about.html`)
});
app.get('/home',(_,resp)=>{
    resp.sendFile(`${publicPath}/home.html`)
});
app.listen(4000);