const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const db = require("../models");
const keys = require("../config/keys");

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.MONGO_URI = keys.MONGO_URI;

module.exports= passport => {

    passport.use(
        new JwtStrategy(options, (jwtPayload, done) => {
             User.findOne({
                 type: _id
             })
             .then(User => {
                if(user) {
                    return done(null, user); //runs if successful
                }
                return done(null, false); //runs if unsuccessful
             })
             .catch(err => console.log("Passport encountered an error" + err));
        })
    )
}