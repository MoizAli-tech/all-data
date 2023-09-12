const express = require("express");
const mongooseConnect = require("./mongoose.js");





const app = express();

async function condLogical(){

    let model = await mongooseConnect();
    let result = await model.find(
        
            // $or:[
            //     {name:"moiz"},
            //     {age:{$ne : 21,$lt:24}}
            // ],
            // $and:[
            //     {age:{$gt:21}}
                
            // ]
            // age:{$gt:20},courses:{$all:["js","python"]}

            // age:{$exists:true}
            // name:"alia",
            // age:27,
            // courses:["java","c#","pycharm"],
            // address:{
            //     house:"2eo",
            //     email:"aalia.3149@gmail.com",
            //     number:3214
            // }
            // "address.house":"e20",
            // "courses.0":"java"

        
    //   [{    
    //         name:"alia",
    //         age:27,
    //         courses:["java","c#","pycharm"],
    //         address:{
    //             house:"2eo",
    //             email:"aalia.3149@gmail.com",
    //             number:3214
    //         }

    //     },
    //     {    
    //         name:"hassan",
    //         age:21,
    //         courses:["javascript","c#","python"],
    //         address:{
    //             house:"2eo",
    //             email:"hassan.3149@gmail.com",
    //             number:3214
    //         }

    //     },
    //     {    
    //         name:"khalida",
    //         age:19,
    //         courses:["asp.net","c#","python"],
    //         address:{
    //             house:"2eo",
    //             email:"hassan.3149@gmail.com",
    //             number:3214
    //         }

    //     },

    // ]

      // {
      //   age:{$nin:[19,20]}
      // }


            
    )
    console.log(result)


}

 condLogical();

