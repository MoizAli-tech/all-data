
  const { default: mongoose } = require("mongoose");
  const connectRelations = require("./mongoose.js");
  const mongodb = require("mongodb")
  
  
  async function manytomany(){
      const [tModel,s2Model,jModel,sModel] = await connectRelations(); 

    //   const result = await jModel.create([
    //     {
    //     teachId:'63d4ecc9d92af7211f6d769f',
    //     studentId:'63d4eb3f2891451f25db3c65'
    //   },
    //   {
    //     teachId:'63d4ecf4e697df418ede4baa',
    //     studentId:'63d4eb3f2891451f25db3c65'
    //   },
    //   {
    //     teachId:'63d4ecf4e697df418ede4baa',
    //     studentId:'63d4eb3f2891451f25db3c66'
    //   },
    //   {
    //     teachId:'63d4ed43a1bb66589ff8eede',
    //     studentId:'63d4eb3f2891451f25db3c66'
    //   },{
    //     teachId:'63d4ed43a1bb66589ff8eede',
    //     studentId:'63d4eb3f2891451f25db3c69'
    //   },
    //   {
    //     teachId:'63d4ecf4e697df418ede4baa',
    //     studentId:'63d4eb3f2891451f25db3c69'
    //   }

    
    // ])
        // let teacher =   await tModel.findOne({name:"t3"},{_id:1});
        // let join = await jModel.find({teachId:teacher},{studentId:1})
        // let arr = join.map((item)=>{ return item.studentId})
        // let student = await sModel.find({_id:{$in:arr}})    
        //  console.log(student)

         let student =   await sModel.findOne({name:"nouman"},{_id:1});
         let join = await jModel.find({studentId:student},{teachId:1})
         let arr = join.map((item)=>{ return item.teachId})
         let teacher = await tModel.find({_id:{$in:arr}})    

         console.log(teacher)
  }


  manytomany();

