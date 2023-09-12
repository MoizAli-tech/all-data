const express = require("express");
const app = express();
const router = express.Router();
const passport = require("passport");
require("dotenv").config();

const GoogleStrategy = require("passport-google-oauth2").Strategy;

passport.use(new GoogleStrategy(
{
    clientID:process.env.GOOGLE_CLIENT_ID,
    clientSecret:process.env.GOOGLE_CLIENT_SECRET,
    callbackURL:process.env.GOOGLE_CALLBACK_URL,
    passReqToCallback:true

},
(req,accessToken,refreshToken,profile,done)=>{
    // console.log(profile);
    let user = {id:profile.id,
        name:profile.displayName,
        email:profile.emails[0].value
    };
    return done(null,user)
}))

// passport.serializeUser((user,done)=>{
//      done(null,user.id);
// })

passport.serializeUser(function(user, cb) {
    process.nextTick(function() {
      return cb(null, user.id);
    });
})

// passport.deserializeUser((id,done)=>{
//     console.log(id)
//     done(null,user);

// })
passport.deserializeUser(function(id, cb) {
    // db.get('SELECT * FROM users WHERE id = ?', [ id ], function(err, user) {
    //   if (err) { return cb(err); }
      
    // });
    console.log(id);
    let data = {name:"moiz"}
    return cb(null, data);
  });


router.get('/',
  passport.authenticate('google', { scope:
      [ 'email', 'profile' ] }
));

router.get("/success",(req,res)=>{
    res.send("success");
})

router.get( '/callback',
    passport.authenticate( 'google', {
        // successRedirect: '/google/success',
        failureRedirect: '/login'
}),(req,res)=>{
    console.log(req.user)
    res.send("i worked");
});

module.exports= router;
