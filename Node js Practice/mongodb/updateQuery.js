const db = require("./mongodb.js")

async function updater(){
const collection = await db("moiz","first");
const updated = await collection.updateMany({name:"khalid"},{$set:{age:29,education:"BA"}})
console.log(updated)

}

updater()