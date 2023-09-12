const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
mongoose.set('strictQuery',true);

url = "mongodb://127.0.0.1:27017/one_to_one";

async function connectRelations(collection,schema){
    await mongoose.connect(url);

    let teacherSchema =  mongoose.Schema({
       
            name:{
                type:String,
                index:true,
            },
            address:{type:String},
            students:[
               { type:ObjectId,
                ref:"student",
                }
            ]
            
        
    },{timestmps:true})

    let studentSchema = mongoose.Schema({
        name:String,
        address:String,
        teachers:[ObjectId]
        
    })

    let joinSchema = mongoose.Schema({
        teachId:ObjectId,
        studentId:ObjectId
    })

    
    let studySchema = mongoose.Schema({
        name:String,
        address:String,
        techId:{type:ObjectId, ref:"teacher"}
        
    })

    let moizSchema = mongoose.Schema({
        name:String,
        arr:[String]

    })
    let s2Model = mongoose.models.study || mongoose.model("study",studySchema)
    let tModel = mongoose.models.teacher || mongoose.model("teacher",teacherSchema);
    let sModel = mongoose.models.student || mongoose.model("student",studentSchema)
    let jModel = mongoose.models.join || mongoose.model("join",joinSchema)
    let moizModel = mongoose.models.moiz || mongoose.model("moiz",moizSchema)

    return [tModel,s2Model,jModel,sModel,moizModel];
}

module.exports = connectRelations;