const mongooseConnect = require("./mongoose.js");

async function insert(){
const model = await mongooseConnect();
const data = await model.create({name:"superkalifrajilelistic"})
console.log(data)

}

async function update(){
    const model = await mongooseConnect();
    const data = await model.updateMany({name:"ali"},{$set:{name:"doremon"}})
    console.log(data)
}

async function del(){
    const model = await mongooseConnect();
    const data = await model.deleteMany({name:"doremon"})
    console.log(data)
}
    

async function finder(){
    const model = await mongooseConnect();
    const data = await model.find({name:"khan"})
    console.log(data)
}

async function replace(){
    const model = await mongooseConnect();
    const data = await model.replaceOne({name:"khan"},{name:"khalida",age:23})
    console.log(data)
}
replace()