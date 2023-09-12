const db = require("./mongodb.js");

async function inserter (){
    const collection = await db("moiz","first");
    const insert = await collection.insertOne({name:"khalid",age:39});
    console.log(insert)
    
}

inserter()