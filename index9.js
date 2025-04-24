const express =require('express');
const app=express();
app.get("",(req,resp)=>{
    // resp.send(`<h1>"hi,This is Home page"</h1>
    //     <a href="/about">Go to about page</a>`)
    // console.log(req.query.name)
    resp.send("welcome,"+req.query.name)
})
app.get("/about",(req,resp)=>{
    // console.log(req.query.name)
    ("welcome,This is About page")
    // resp.send(`<h1>"thanks, this is about page"</h1>
    //     `)
    resp.send(`<input type="text" plceholder="user name" value="${req.query.name}"/>
        <button>Click</button>
        <a href="/" >Go to Home page</a>`)
});
app.get("/help",(req,resp)=>{
    // resp.send(`<h1>"welcome, this is help page"</h1>`)
//     resp.send([{
//         name:'Peter',
//         email:'peter@test.com',},
//         {
//             name:'Bruce',
//             email:'brutest.com'

//         }

//     ])
});
app.listen(5000);