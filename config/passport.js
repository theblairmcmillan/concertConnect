'use strict'

var LocalStrategy = require('passport-local').Strategy;
var Artist = require('../models/artists').model;
var Host = require('../models/hosts').model;

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

    passport.deserializeUser(function(id, done) {
        Host.findById(id, function(err, host) {
            done(err, host);
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

    // LOCAL LOGIN 

    passport.use('local-login', new LocalStrategy({
       
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) { // callback with email and password from our form
        console.log(")))))))", email, password);
        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
        Artist.findOne({ 'local.email' :  email }, function(err, artist) {
            // if there are any errors, return the error before anything else
            if (err)
                return done(err);

            // if no user is found, return the message
            if (!artist) {
                console.log("no artist");
                return done(null, false, req.flash('loginMessage', 'No artist found.')); // req.flash is the way to set flashdata using connect-flash
            }
            // if the user is found but the password is wrong
            if (!artist.validPassword(password)) {
                console.log("no password");
                return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata
            }
            // all is well, return successful user
            return done(null, artist);
        });

    }));

    // LOCAL SIGN UP FOR HOSTS 
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
        Host.findOne({ 'local.email' :  email }, function(err, host) {
           
            if (err)
                return done(err);

            if (host) {
                return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
            } else {

                // if there is no Artist with that email
                // create the Artist
                var newHost = new Host();

                // set the Artist's local credentials
                newHost.local.email    = email;
                newHost.local.password = newHost.generateHash(password);

                // save the Artist
                newHost.save(function(err) {
                    if (err)
                        throw err;
                    return done(null, newHost);
                });
            }

        });    

        });

    }));

    // LOCAL LOGIN FOR HOSTS

    passport.use('local-login', new LocalStrategy({
       
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) { // callback with email and password from our form
        console.log(")))))))", email, password);
        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
        Host.findOne({ 'local.email' :  email }, function(err, host) {
            // if there are any errors, return the error before anything else
            if (err)
                return done(err);

            // if no user is found, return the message
            if (!host) {
                console.log("no host");
                return done(null, false, req.flash('loginMessage', 'No artist found.')); // req.flash is the way to set flashdata using connect-flash
            }
            // if the user is found but the password is wrong
            if (!host.validPassword(password)) {
                console.log("no password");
                return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata
            }
            // all is well, return successful user
            return done(null, host);
        });

    }));
};
