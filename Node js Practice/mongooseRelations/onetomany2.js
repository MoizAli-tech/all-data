const { default: mongoose } = require("mongoose");
const connectRelations = require("./mongoose.js");
const mongodb = require("mongodb")


async function onetomany2(){
    const [tModel,s2Model] = await connectRelations();

    // let students = await s2Model.create([
    //     {
    //         name:"khalid",
    //         address:"lahore",
    //         techId:'63d4ecc9d92af7211f6d769f'
    //     },{
    //         name:"romeo",
    //         address:"rwp",
    //         techId:'63d4ecf4e697df418ede4baa'
    //     },{
    //         name:"ali",
    //         address:"multan",
    //         techId:'63d4ecf4e697df418ede4baa'
    //     },{
    //         name:"farhan",
    //         address:"rawaldam",
    //         techId:'63d4ecf4e697df418ede4baa'
    //     },{
    //         name:"saif",
    //         address:"damnakoh",
    //         techId:'63d4ecc9d92af7211f6d769f'
    //     },{
    //         name:"hassan",
    //         address:"islamabad",
    //         techId:'63d4ed43a1bb66589ff8eede'
    //     }
    // ])

    // console.log(students)
        // Single Query
    // let teacher = await tModel.findOne({name:"t1"},{techId:1})
    // let students = await s2Model.find({techId:teacher._id})
    // console.log(students)

        // doubleQuery
    let student = await s2Model.findOne({name:"ali"},{techId:1})
    let teacher = await tModel.find({_id:student.techId})

    console.log(teacher)

}

onetomany2();