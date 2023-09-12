const agModel = require("./aggregationSchema.js");
const mongoose = require("mongoose");
mongoose.set("strictQuery",true)
const url = "mongodb://127.0.0.1:27017/aggregation"

const connect = async()=>{
    await mongoose.connect(url)
    // let result = await agModel.find({}).countDocuments();
    // console.log(result)

    // let result = await agModel.aggregate([
    //     {$group:{_id:{eyecolor:"$eyeColor",gender:"$gender"}}},
    //     // {$match:{"_id.eyecolor":"blue"}}
    // ])
   

    // let result = await agModel.updateMany({},{
    //     $push:{"tags":{$each:[],$sort:1}}
    // })


    //  push is only used for array and sorting used with it effects real time data however
    //  sorting in aggregation is only for projection and does not effect real time data.

     
    // let result = await agModel.aggregate([
    //     {$match:{}},
    //     {$sort:{age:1}}
    // ])

    // let result = await agModel.aggregate([
    //     {$match:{}},
    //     {$sort:{age:1,gender:-1}}
    // ])

    
    // let result = await agModel.aggregate([
    //     {$group:{_id:{fav:"$favoriteFruit",eye:"$eyeColor"}}},
    //     {$sort:{_id:1}}
    // ])

    // in the above case when the object is to be sorted then every key value pair is
    //  considered suchthat 1st key is given importance if same the next key is then considered


    
    // let result = await agModel.aggregate([
    //     {$group:{_id:{fav:"$favoriteFruit",eye:"$eyeColor"}}},
    //     {$sort:{"_id.eye":1}}
    // ])
    
    // let result = await agModel.find({},{_id:1,info:{agee:"$age",eye:"$eyeColor"}}).limit(5)
    // console.log(result)

    // let result = await agModel.aggregate([
    //     {$limit:4},
    //     {$match:{}},
    //     {$project:{_id:1,info:{age:"$age",eye:"$eyeColor"}}}
    // ])

    // accumelators only work with group operator

    // let result = await agModel.aggregate([
    //     {$group:{_id:"$age",count:{$sum:1}}},
    //     {$sort:{_id:1}}
    // ])

    // let result = await agModel.aggregate([
    //     {$group:{_id:"$age",count:{$sum:"$age"}}},
    // ])
    // let result = await agModel.aggregate([
    //     {$limit:1000},
    //     {$unwind:"$tags"},
    //     {$group:{_id:"$tags",count:{$sum:1}}}

    // ])


    // let result = await agModel.aggregate([
    //     {$group:{_id:"$company.location.country",avg:{$avg:"$age"},min:{$min:"$age"},max:{$max:"$age"}}},
      
    // ])

    // let result = await agModel.aggregate([
    //     {$project:{avg:{$avg:"$age"}}},
      
    // ],{allowDiskUse:true})

    let result = await agModel.aggregate([
        {$limit:4},
        {$match:{}},
        {$project:{_id:1,add:{$add:["$index","$age"]}}},
        {$sort:{_id:1}}
    ])
        console.log(result)

}

connect()