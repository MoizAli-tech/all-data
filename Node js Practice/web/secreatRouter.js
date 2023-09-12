const express = require("express");
const app = express();
const router = express.Router();
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken")
const path = require("path");
const eModel = require("./eModel.js");


const imagePath = path.join(__dirname, "/images")
// console.log(imagePath)
router.get("/", async(req, res) => {
    if (!req.cookies.jwt) {
        res.redirect("/login")
        return;
    }
    let token = req.cookies.jwt;
    let id = jwt.verify(token,"secretKey")
    let [data] = await eModel.find({_id:id},{file:1,_id:0})
    let files = [...data.file];
    res.render("secreatPage", {files})


})


module.exports = router
