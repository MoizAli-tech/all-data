const db = require("./mongodb.js");

async function finder(){
    let collection = await db("moiz","first");
    let data =  await collection.find().toArray()
   console.log(data)
}
finder()