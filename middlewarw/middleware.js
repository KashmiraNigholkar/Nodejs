module.exports=(req,resp,next)=>{
    if(!req.query.age){
    resp.send("Please Provise your age")
}
 else if(req.query.age<18){
    resp.send("You are under age")
}else{
    next()
}

}