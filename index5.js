const fs=require('fs');
const path=require('path');
const dirPath=path.join(__dirname)
console.log(dirPath)
// for(i=0;i<5;i++){
//     fs.writeFileSync(`${dirPath}/hello${i}.txt`,"some simple text in file")

//     // fs.writeFileSync(dirPath+'/hello'+i+'.txt',"some simple text in file")
// }
fs.readdir(dirPath,(err,files)=>{
    files.forEach((item)=>{
        console.warn("files name is:",item)
    })
})
