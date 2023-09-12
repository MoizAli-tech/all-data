const express = require ("express");
const path = require("path");

const route = express.Router();
const app = express();

app.set("view engine","vash");

let filesPath = path.join(__dirname,'files');
// app.use(express.static(filesPath));



const middleWare = (req,resp,next)=>{
    if(req.query.name){
        next();
    }
    else{
        resp.send("plz enter name");
       
    }
}

// app.use(middleWare);

app.get("/",(req,resp)=>{
    resp.sendFile(`${filesPath}/home.html`)
    let user = {
        name:"moiz",
        class:"bscs"
    }
    let data = ["ali","moiz","hassan","khalid"];

    resp.render("index",{user,data});

})

app.get("/about",(req,resp)=>{
    // resp.sendFile(`${filesPath}/about.html`);
    let students = [
        {
            name:"moiz",
            section:"BSCS"
        },
        {
            name:"ali",
            section:"BSIT"
        },
        {
            name:"khan",
            section:"BSAI"
        }
    ]

    let data = ["ali","moiz","hassan","khalid"];

    resp.render("about",{data,students});
})

app.get("*",(req,resp)=>{
    // resp.sendFile(`${filesPath}/pagenotfound.html`);
    resp.render("404");
})
app.listen(5000);