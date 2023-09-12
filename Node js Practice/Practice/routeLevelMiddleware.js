const express = require("express");
const app = express();
const router = express.Router();

let middleware = (req,resp,next)=>{
    if(req){
        console.log("middleware")
        next()
    }else{
        resp.send("enter valid age")
    }
}

router.use(middleware)
app.use('/about',router)

app.get("/",(req,resp)=>{

    resp.send("home")
})



router.get("/about",(req,resp)=>{

    resp.send("about")
    
})

router.get("/contact",(req,resp)=>{

    resp.send("contact")
    
})



app.get("*",(req,resp)=>{

    resp.send("notfound")
})
app.listen(5000);

// Things to remember about  middleware 

// use of middle ware should be told first to the app before anything i.e router.use(middleware) 
// this is because if the use is told later then the main middleware function is called first and 
// the middleware is never called because we rarely use next() with the last middleware function


// if router is used then write it after the middleware use has been told to the app i.e
// router.use(middleware)
// app.use('/about',router)


// if a request is made by the client to the slug then the middleware will be called even if 
// the pade or the last middleware does not Exist i.e
// app.use(slug,router)
