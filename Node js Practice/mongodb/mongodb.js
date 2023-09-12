const {MongoClient} = require("mongodb")

const url = "mongodb://127.0.0.1:27017";

const client = new MongoClient(url);

async function db (database,collect){
    let result =  await client.connect();
   
     let db =  result.db(database);
     let collection =  db.collection(collect)
    //   let data = await collection.find({name:"moiz"}).toArray()
    //   console.log(data)
    return collection   

};




module.exports = db;