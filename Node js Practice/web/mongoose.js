const mongoose = require("mongoose");
mongoose.set("strictQuery",true)
url = "mongodb://127.0.0.1:27017/employee";

const connect= async()=>{
   const result =  await mongoose.connect(url);
}

module.exports = connect;