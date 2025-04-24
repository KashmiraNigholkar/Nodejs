// //Handling Asynchronous data

console.log("start exe...")
let a=20;
let b=0;

// setTimeout(()=>{
//     // console.log("logic.exe...")
//     b=30;
// },2000)

let waitingData=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(30);

    },2000)

})
waitingData.then((data)=>{
    b=data;
    console.log(a+b);
})
// console.log("complete exe...")
// console.log(a+b);