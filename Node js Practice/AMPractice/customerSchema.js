const mongoose = require("mongoose");
// url = "mongodb://127.0.0.1:27017/arreyData";
// remember to not write the url inside the schema file because if done so the data will be inserted
// in the url location even if the mongoose.connnect is not used
const dataSchema = mongoose.Schema({
    sName:String,
    manufacturer:String,
    expiry:Number
})

const productSchema = mongoose.Schema({
    title:String,
    price:Number,
    cPanel:Boolean,
    cRegister:Boolean,
    wordpress:Boolean,
    
    data:[
        {
           type:dataSchema
        }
    ]


})
const customerSchema = mongoose.Schema({
    name:String,
    date:{
        type:Date,
        default:Date()+5
    },
    cart:[
        {
            type:productSchema
        }
    ]
},{timestamps:true})

const customer = mongoose.models.customer || mongoose.model("customer",customerSchema);

module.exports = customer;

