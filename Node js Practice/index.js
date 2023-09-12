const connectRelations = require("./mongooseRelations/mongoose.js");

async function index(){
    const [tModel,,,,moizModel] = await connectRelations();
     let t =  tModel.schema.index({address:1})
      t =  tModel.schema.removeIndex({address:1})
    const indexes = tModel.schema.indexes()
    let teacher = await tModel.find({}).populate("students").explain("execStats");
     console.log(indexes)

    // t = await moizModel.updateOne({name:"random2"},{$push:})
    // console.log(t)
    
}

index()