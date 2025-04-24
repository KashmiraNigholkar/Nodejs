const express=require('express')
const path=require('path');

const app=express();
const publicPath=path.join(__dirname,'public')
// app.use(express.static('public'));
// app.listen(4000,()=>{
//     console.log('server is started');
// });
app.get('',(_,resp)=>{
    resp.sendFile(`${publicPath}/index.html`)
})
app.get('/about',(_,resp)=>{
    resp.sendFile(`${publicPath}/about.html`)
})
app.get('/home',(_,resp)=>{
    resp.sendFile(`${publicPath}/home.html`)
})
app.get('/help',(_,resp)=>{
    resp.sendFile(`${publicPath}/help.html`)
})

// app.get('/profile',(_,resp)=>{
//     const user={
//         name:'peter',
//         email:'peter@123',
//         country:'USA'
//     }
//     resp.render('profile',{user})
// })
app.set('view engine','ejs');

app.get('/profile',(_,resp)=>{
    // resp.sendFile(`${publicPath}/index.html`)
    resp.render('profile')
})
app.listen(4000);