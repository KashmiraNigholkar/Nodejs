const{MongoClient}=require('mongodb')
const url='mongodb://localhost:27017';
const databaseName='e-comm'
const client=new MongoClient(url);

 async function dbConnect(){
    let result= await client.connect()
    db=result.db(databaseName);
    collection=db.collection('products');
    let data=collection.find({}).toArray();
    console.log(data)
}
// getData();
// dbConnect().then((resp)=>{
//     resp.find({name:'nord'}).toArray().then((data)=>{
//        console.log(data) 
//     })
// })

const main=()=>{
    let data=await dbConnect();
    data=await data.find().toArray();
    console.log(data);
}