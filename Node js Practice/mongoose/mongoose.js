const mongoose = require("mongoose");
url = "mongodb://127.0.0.1:27017/moiz";
mongoose.set("strictQuery",true);


async function mongooseConnect(){
     await mongoose.connect(url);

    
    
     let addressSchema = mongoose.Schema({
        house:String,
        email:String,
        number:[Number]
     })

     
     
     let schema =  mongoose.Schema({
        name:String,
        age:{
            type:Number,
            required:true
        },
        courses:{
            type:[String]
        },
        
        date:{
            type:Date,
             default:Date.now(),
            
        },
        address:{
           type:{
            addressSchema
         },
           required:true
        }
     })

    
     

     let FirstModel =  mongoose.models.second || mongoose.model("second",schema);
    //  let data = new FirstModel({name:"mobile"})
    //  let result = await data.save();
    // let arr = [
    //     {name:"javascript"},
    //     {name:"express"},
    //     {name:"node"},
    //     {name:"react"}
    // ]

    return FirstModel;
}
module.exports=mongooseConnect;
