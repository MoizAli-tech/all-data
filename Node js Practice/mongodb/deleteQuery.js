const db = require("./mongodb.js")
async function deleter(){
const collection = await db("moiz","first")
const deleted = await collection.deleteOne({name:"khalid"})
console.log(deleted)
}

deleter()
