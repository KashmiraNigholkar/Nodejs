
// Asynchrounous node.js
const fs=require('fs');
const path=require('path');
const dirPath=path.join(__dirname,'crud');

const filePath=`${dirPath}/apple1.txt`
// fs.writeFileSync(filePath,'This is a simple text file')
// fs.readFile(filePath,(err,item)=>{
//     console.log(item)
// })
// fs.appendFile(filePath,'and file name is apple1.txt ',(err)=>{
//     if(!err) console.log("file is updated")
// });
// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
//     if(!err)
//         console.log("file name is updated")
// })
fs.unlinkSync(`${dirPath}/fruit.txt`);