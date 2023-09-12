const mongoose = require("mongoose");
const { updateOne } = require("./customerSchema.js");
url = "mongodb://127.0.0.1:27017/arreyQuery";
const cModel = require("./customerSchema.js");

mongoose.set("strictQuery", true)


// points to rememeber
// while searching in a array with embedded documents the index must be specified,
// if the update condition is satisfied whatever is written in the $set opearator will be updated 
// or added upsert is irrelavent here it only works for if condition is not satisfied
// if you want to not run set if the condition is satisfied then use $setOnInsert with upsert

const connector = async () => {
    await mongoose.connect(url);

    //    let result =  await cModel.insertMany([
    //         {
    //             name:"c3",
    //             cart:[
    //                 {title:"p3",
    //                  price:127,
    //                  data:[
    //                    { sName:"s4",
    //                      manufacturer:"m1",
    //                      expiry:2002
    //                     },
    //                     { sName:"s5",
    //                     manufacturer:"m2",
    //                     expiry:2003
    //                    }

    //                  ]
    //                 }

    //             ]
    //         }
    //    ])

    //    console.log(result)

    // let result = await cModel.find({
    //     $jsonSchema: {
    //         // required: ["name"],
    //         properties: {
    //             name: { bsonType: String }
    //         }
    //     }
    // })

    // console.log(result)


    //  let result = await cModel.find({"cart.price":{$mod:[5,3]}})
    //  console.log(result)


    
    // let result = await cModel.updateOne({name:"c2"},{
       
    //          $unset:{name:1}
        
    // })
    // console.log(result)

    // let result = await cModel.updateOne({cname:"c2"},{
    //     $rename:{"cname":"name"}
    // })

    // console.log(result)

    // let result =await cModel.updateOne({name:"c1"},{$inc:{"cart.0.price":-15}})
    //  result =await cModel.updateOne({name:"c1"},{$mul:{"cart.0.price":15}})

    // remember in order to use update operators the index of array must be specified

    // console.log("i was run ",result)

    // let result = await cModel.updateOne({name:"c1"},{
    //     $min:{"cart.0.price":100}
    // })
    
    // let result = await cModel.updateOne({name:"c4"},{
    //     $setOnInsert:{
    //         name:"c6"
    //     }
    // },{upsert:true})

    // let result = await cModel.updateMany({name:"c1"},{$set:{"cart.$[].wordpress":true}})

    // let result = await cModel.updateMany({},{"cart.$[item].wordpress":false,"cart.$[item].cPanel":true},{arrayFilters:[{"item.cPanel":false}]})
    
    
    // let result = await cModel.updateOne({name:"c2"},{$pull:{"cart.$[].data":{sName:"s2",manufacturer:"m2",expiry:"2003"}}})

    // let result = await cModel.updateOne({name:"c2"},{ 
    //     $addToSet:{"cart.0.data":{sName:"s2",manufacturer:"m2",expiry:"2003"}}
    // })

    // let result = await cModel.updateOne({name:"c2"},{ 
    //     $addToSet:{"cart.$[].data":{$each:[{sName:"s2",manufacturer:"m2",expiry:"2003"},
    //     {sName:"s3",manufacturer:"m3",expiry:"2003"},
    //     {sName:"s4",manufacturer:"m1",expiry:"2020"}
        
    // ]}}
    // })


    // let result = await cModel.updateOne({name:"c1"},{ 
    //     $push:{"cart.$[].data":{$each:[],$sort:-1}}
    // })

    // let result = await cModel.updateOne({name:"c2"},
    //     {
    //     // $pull:{
    //     //         cart:{data:{$eleMatch:{manufacturer:"m2"}}}
    //     //     }

    //         $pull:{
    //             cart:{"data.$[].manufacturer":"m2"
    //                 }
    //         }
        
    //     }

 
    
    // )

    
    // let result = await cModel.updateMany({},
    //     { 
    //     $set:{"cart.$[].data.$[item2].sName":"s2"}
    //    },
    //    {
    //     arrayFilters:[
         
    //         {
    //         "item2.sName":"s 2"
    //         }
    //     ]
       
    //    }
    // )

    // if you want to update a document then condition must be specified in case of updateOne
    // it does not work like querySelector in vanilla js

    // if you do not want to specify the condition then use updateMany

    // let result = await cModel.updateOne({name:"c2"},{
    //     $push:{"cart.$[].data":{$each:[
    //         {sName:"s3",manufacturer:"m4",expiry:2005}
    //     ],$slice:2}}
    // })

    
    // let result = await cModel.updateOne({name:"c3"},{
    //     $push:{"cart.$[].data":{$each:[
           
            
    //         ],$sort:{expiry:1}}
    //     }
    // })
    // console.log(result)
    

    // while using sort remember that for string it will take the first letter and sort 
    // in alphabetical order if first letters are same the array will not be sorted



    // let [result] = await cModel.find({_id:"63e2a25e8d64ea9ce3c65105"},{date:1,_id:0})
    // let r = Date(`${result} `)
    // console.log(r)


    let result = await cModel.create({name:"c4",age:35})
    console.log(result)

}

connector()