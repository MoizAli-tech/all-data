const express = require("express");
const loginRouter = require("./loginRouter.js")
const connect = require("./mongoose.js")
connect();
const eModel = require("./eModel.js")
const cookieParser = require("cookie-parser")
const jwt = require("jsonwebtoken")
const mailer = require("./nodemailer.js");
const { updateOne } = require("./eModel.js");
const multer = require("multer");
const path = require("path");
const secreatRouter = require("./secreatRouter.js");
const googleRouter = require("./googleRouter.js");
const facebookRouter = require("./facebookRouter.js");
const { MulterError } = require("multer");
require("dotenv").config();
require("./passport-setup.js");
const passport = require("passport");
const session = require("express-session");
const { default: to } = require("await-to-js");
const app = express();

//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}))
app.use(passport.initialize());
app.use(passport.session());


// it is necessary to tell the path of static images to display them in client and accessing in .ejs
app.use(express.static("./web/images"))

//Router
app.use("/login", loginRouter);
app.use("/secreat", secreatRouter);
app.use("/google", googleRouter);
app.use("/facebook", facebookRouter)

//view Engine
app.set("view engine", "ejs");





const imagePath = path.join(__dirname, "/images");

app.get("/", async (req, res) => {
    let token = req.cookies.jwt;
    if (token) {
        let payload = jwt.verify(token, "secretKey")
        let result = await eModel.find({ _id: payload })
    }
    // console.log(result)
    res.render("register")

})

app.get("/data", async (req, res) => {
    let result = await eModel.find({});
    res.send(result);
})


// this get request will create tokens for those documents where tokens are not already present 
// this is helpful  if u are not adding documents from a form but directly importing through 
// mongocompass

const updater = async (result, index) => {
    let obj = result[index];
    await eModel.updateOne({ _id: result[index]._id }, { $set: obj })

}
app.get("/create", async (req, res) => {
    let result = await eModel.find({});
    result.forEach((item, index) => {
        if (result[index].tokens.length == 0) {

            result[index].createToken()
            updater(result, index);
        }
    })

    res.send(result[0])
    // console.log(result)

})

const storage = multer.diskStorage({
    destination: (req, file, cb) => {

        cb(null, imagePath)
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
        // console.log(file.fieldname)
        // console.log(file.filename)
        // console.log(file.originalname)

    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype.split("/")[1] == "jpeg") {
        cb(null, true);
    } else {
        let error = new Error("file is not jpeg");
        cb(error.message, false);
    }
}




const upload = multer({
    storage, fileFilter, limits: { fileSize: 10000000000000 }
}).array("file", 5);



app.post("/", upload, async (req, res, next) => {

    const { username, password, email, cpassword, age } = req.body;
    const file = req.files;
    let files = file.map((e, i) => {
        return e.filename;
    })


    if (password && cpassword && password === cpassword && username && age && email && files) {
        // const result = await eModel.create({
        //     username,
        //     password,
        //     age
        // })

        if (username == "1") {
            let err = new Error("username can not be 1");
            next(err);
        } else {
            const result = new eModel({
                username,
                email,
                password,
                age,
                file: files
            })


            const tooken = await result.createToken();

            const data = await result.save();
            mailer(result.username, result.email, data.id)

            res.send(data);

        }



    }
    else {
        res.json({ message: "enter valid data " })
    }


})




app.get("/verify/:id", async (req, res) => {
    let id = req.params.id;
    let result = await eModel.updateOne({ _id: id }, { $set: { verified: true } })
    res.send("updated")
})

app.get("/verify", async (req, res) => {
    let id = req.query.id;
    console.log(id)
    let result = await eModel.updateOne({ _id: id }, { $set: { verified: true } })
    res.send("updated")
})


app.get("/logout", async (req, res) => {
    if (req.cookies && req.cookies.jwt) {
        res.clearCookie("jwt");
        res.send("deleted");
    } else {
        res.send("u must be logged in first to logout");
    }



})



//error handling middlewares
const multerError = (err, req, res, next) => {
    if (err instanceof MulterError) {
        if (err.code === "LIMIT_FILE_SIZE") {
            res.status(400).json({ message: "File size is too large. Maximum file size allowed is 1 MB." });
        } else {
            res.status(500).json({ message: "Something went wrong with uploading the file." });
        }
    } else {
        next(err)
    }
};

app.use(multerError);



app.get("/user", async (req, res, next) => {

    function getUser(pass) {
        return new Promise((resolve, reject) => {
            if (pass == true) {
                resolve("moiz")
            } else {
                reject(new Error("User is undefined"))
            }


        })
    }

    function getData(pass) {
        return new Promise((resolve, reject) => {
            if (pass == true) {
                resolve("data")
            } else {
                throw new Error("data is undefined")
            }


        })
    }

    // try{
    //     let user = await getUser(true);
    //     let data = await getData(true);
    //     if(user && data){
    //         res.send("user & data");
    //     }
    // }catch(error){
    //     next(error);
    // }
    
    //mix n match is used to get the value accessaible at every level which is not possible in try n catch method
    // let user = await getUser(true).catch((error)=>{next(error)});
    // let data = await getData(true).catch((error)=>{next(error)});
    // if(user && data){
    //     res.send("user & data");
    // }

    // to mehod is useful to avoid multiple catches in mix n match
    // let [err,user] = await to(getUser());
    // let [err1,user1] = await to(getData(true));

    // if(err || err1){
    //     next(err || err1);
    // }else if (user && user1){
    //     res.send("user")
    // }

    // if(user){
    //     res.send("user")
    // }else if(err){
    //     next(err)
    // }
})




app.use((error, req, res, next) => {
    if (error.message) {
        res.send(`${error.message}`);
    } else {
        next(error);
    }
})


app.listen(5000)