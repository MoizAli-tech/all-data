const { application } = require("express");
const e = require("express");
const express = require("express");

const app = express();
const  db = require("../mongodb/mongodb.js");


async function dataFetcher(){
const collection = await db("moiz","first");
const data = await collection.find({name:"ali"}).toArray()
return data;

}
app.use(express.json())

app.get("/",async(req,resp)=>{
    const data = await dataFetcher();
    resp.send(JSON.stringify(data[0]));
})

app.post("/",async(req,resp)=>{
    const collection = await db("moiz","first")
    
    const data = collection.insert(req.body)
})

app.put("/:name",async(req,resp)=>{
    const collection = await db("moiz","first");
    const data = await collection.updateMany({name:req.params.name},{$set:req.body});
    console.log(req.body)
    resp.send(req.body)
})

app.delete("/:name",async(req,resp)=>{
    const collection = await db("moiz","first");
    const data = await collection.deleteMany({name:req.params.name})
    resp.send(req.params.name);
})

app.listen(5000);

// when we are getting data from the client i.e json the express.json() must be used first