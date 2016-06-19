'use strict'

var LocalStrategy = require('passport-local').Strategy;
var Artist = require('../models/artists').model;

module.exports = function(passport) {

    // used to serialize the Artist for the session
    passport.serializeUser(function(User, done) {
        done(null, User.id);
    });

    // used to deserialize the User
    passport.deserializeUser(function(id, done) {
        Artist.findById(id, function(err, artist) {
            done(err, artist);
        });
    });

   
    // LOCAL SIGN UP 
    passport.use('local-signup', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) {
        // asynchronous
        // Artist.findOne wont fire unless data is sent back
        process.nextTick(function() {

        // find a Artist whose email is the same as the forms email
        // we are checking to see if the Artist trying to login already exists
        Artist.findOne({ 'local.email' :  email }, function(err, artist) {
           
            if (err)
                return done(err);

            if (artist) {
                return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
            } else {

                // if there is no Artist with that email
                // create the Artist
                var newArtist = new Artist();

                // set the Artist's local credentials
                newArtist.local.email    = email;
                newArtist.local.password = newArtist.generateHash(password);

                // save the Artist
                newArtist.save(function(err) {
                    if (err)
                        throw err;
                    return done(null, newArtist);
                });
            }

        });    

        });

    }));

};