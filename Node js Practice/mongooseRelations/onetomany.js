const { default: mongoose } = require("mongoose");
const connectRelations = require("./mongoose.js");
const mongodb = require("mongodb")
const express = require("express");

const app = express();

async function onetoone(){
    const [tModel,studyModel,,sModel,moizModel] = await connectRelations();
    
    // let result = await model.create([
    //     {
    //         name:"hassan",
    //         address:"lahore"
    //     }, {
    //         name:"khalid",
    //         address:"rwp"
    //     }, {
    //         name:"nouman",
    //         address:"islamabad"
    //     }, {
    //         name:"hamza",
    //         address:"multan"
    //     }, {
    //         name:"ali",
    //         address:"karachi"
    //     }, {
    //         name:"romeo",
    //         address:"faislabad"
    //     }, {
    //         name:"jack",
    //         address:"newyork"
    //     }
    // ])

    //  let result = await model.create({
    //     name:"t3",
    //     address:"lahore",
    //     students:[
            
    //         '63d4eb3f2891451f25db3c69',
    //         '63d4eb3f2891451f25db3c64'
    //     ]

    //  })

//    let students = await sModel.create([
//         {   name:"khalid",
//             address:"multan",
//             teachers:[
//                 '63d4ecc9d92af7211f6d769f',
//                 '63d4ecf4e697df418ede4baa',
//                 '63d4ed43a1bb66589ff8eede'
//             ]
//         },
//         {   
//             name:"hassan",
//             address:"rawalpindi",
//             teachers:[
//                 '63d4ecc9d92af7211f6d769f'
//             ]
//     },
//     {  
//         name:"ateeb",
//         address:"peshawar",
//         teachers:[
            
//             '63d4ecf4e697df418ede4baa',
//             '63d4ed43a1bb66589ff8eede'
//         ]
//     }

//    ])
   
        // student = {
        //     _id:"63d4eb3f2891451f25db3c65",
        //     id1:"63d4eb3f2891451f25db3c69"
        // }

        // let ob =[ {
        //         _id:"s1"
        // },{
        //     _id:"s2"
        // },{
        //     _id:"s3"
        // }
        // ]

        // if an object is passed to be compared with an array then the value in  _id will be checked with everyitem if an array of objects is passed then the all the _id of the objects form an array which will then be checked
        //  let data = await moizModel.find({arr:ob})
        
        
        // Single Query
    // let student = await sModel.findOne({name:"nouman"},{_id:1});
    // let teacher = await tModel.find({students: student})
    // console.log(teacher)
   

   
        // Double Query
    // let teacher =    await tModel.findOne({name:"t3"},{students:1})
    // let t = [...teacher.students]
 

    // let students = await sModel.find({_id:{$in:t}})

    // console.log(students);

   

    // let teacher = await tModel.find({"students.0":mongodb.ObjectId('63d4eb3f2891451f25db3c69')})
   
    
    // console.log(teacher)

    // let student = await studyModel.find({}).populate("techId")


    let teacher = await tModel.find({}).populate("students")

   
    app.get("/",(req,resp)=>{


        resp.send(teacher)
    }).listen(5000)
     
}

onetoone();