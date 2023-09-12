const express = require("express");
const app = express();
const router = express.Router();
const jwt = require("jsonwebtoken");
const eModel = require("./eModel.js");
const cookieParser = require("cookie-parser")

router.use(express.json())
router.use(express.urlencoded({extended:true}))
router.use(cookieParser())


router.get("/",(req,res)=>{
    res.render("login")
})

router.post("/",async(req,res)=>{
    // const {username,password} = req.body;
    // if(username && password){
    //     let result = await eModel.findOne({username,password});
    //     let token = await result.createToken()
    //     res.cookie("jwt",token,{expires:new Date(Date.now()+60000000),httpOnly:true})
    //     res.send(result)
    // }else{
    //     res.send("enter valid data")

    // }

})

module.exports = router