const fs = require("fs");
const express = require("express")
const app = express();
app.get("/",(req,resp)=>{

    const stream = fs.createReadStream("./Stream/Stream.txt");

    stream.pipe(resp)
    // stream.on("data",(data)=>{
    //     console.log(data.toString())
       
        
    // })

    // stream.on("end",()=>{
        
    //     resp.send("ended")
    // })

    // stream.on("error",(er)=>{
    //     console.log(er)
    // })

})

app.listen(5000)
