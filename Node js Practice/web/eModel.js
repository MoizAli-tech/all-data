const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const employeeSchema = new mongoose.Schema({

    username:{
        type:String,
        required:true,
    },

    password:{
        type:String,
        required:true
    },

    age:{
        type:Number,
        required:true
    },

    verified:Boolean,

    file:{
        type:[String],
        required:true
    }, 

    email:{
        type:String,
        required:true
    },

    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]

})

employeeSchema.methods.createToken =  async function(){
    let token = await jwt.sign({_id:this.id},"secretKey");
    this.tokens.push({token})
    return token;
}

module.exports = mongoose.model("employee",employeeSchema)