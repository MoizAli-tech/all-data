const express = require("express");
const app = express();
const router = express.Router();
const passport = require("passport");
const facebookStrategy = require("passport-facebook").Strategy;
require("dotenv").config();

passport.use(new facebookStrategy(
    {
        clientID :process.env.FACEBOOK_CLIENT_ID,
        clientSecret:process.env.FACEBOOK_CLIENT_SECRET,
        callbackURL:process.env.FACEBOOK_CALLBACK_URL,
        profileFields:['id','displayName','name','gender','picture.type(large)','email']
    },
    (accessToken,refreshToken,profile,done)=>{
        //  console.log(profile);
        // if user exists by id else user ko save karna ha 
        let user = {id:profile.id,
                    name:profile.displayName,
                    email:profile.emails[0].value
                };
        return done(null,user)
    }))

    // passport.serializeUser((user,done)=>{
    //     done(null,user);
    // })
    // passport.deserializeUser((id, done) => {
    //     // Lookup user by ID in database or data store
    //     let user = { id: id };
    //     done(null, user);
    // });



router.get("/",passport.authenticate("facebook",{ scope:[ 'email'] }
));

router.get("/success",(req,res)=>{
    res.send("facebook login")
})

router.get('/callback', passport.authenticate('facebook', {failureRedirect: '/login'}), (req, res) => {
    console.log(req.session.passport.user)
    res.send(`logged in`);
});

router.get("/signout",(req,res)=>{
    
    req.session.destroy((e)=>{
    })
    res.send("signout")
})



module.exports = router;