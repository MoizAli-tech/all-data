const mongooseConnect = require("./mongoose.js");
const mongodb = require("mongodb")
const express = require("express")
const app = express();

// app.get("/:id",async (req,resp)=>{
//     const model = await mongooseConnect();
//     const data = await model.find({_id: new mongodb.ObjectId(`${req.params.id}`)});
//     console.log(data)
//     resp.send(data)

// })

app.get("/:name",async (req,resp)=>{
    const model = await mongooseConnect();
  
    const data = await model.find(
        {
            $or:[
                {"name":{$regex:req.params.name}}
            ] 
        }       
        )
    console.log(data)
    resp.send(data)

})

app.use(express.json())

app.post("/",async(req,resp)=>{
   const model = await mongooseConnect();
   const data =  await model.create(req.body)
   console.log(data)
   resp.send(data);

})

app.delete("/:id",async(req,resp)=>{
    const model = await mongooseConnect();
    const data = await model.deleteOne({_id: mongodb.ObjectId(`${req.params.id}`)})
    resp.send("deleted")

})

app.put("/:id",async(req,resp)=>{
    const model = await mongooseConnect()
    const data = await model.updateOne(
        {_id:new mongodb.ObjectId(`${req.params.id}`)},
       { $set:req.body}
    
    )

    resp.send(data)

})

app.listen(5000)

    

