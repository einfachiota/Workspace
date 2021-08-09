  
const express = require('express');
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const authRoute = require('./routes/auth');
const analyticRoute = require('./routes/analytic');
const meetingRoute = require('./routes/meetings')
const db = require('./Database');
const argon2 = require("argon2")
require('dotenv').config()

/**
 * Sets up passport (authentication)
 */
function setupPassport() {
  console.log("Setting up passport")
  passport.use(new LocalStrategy(
    async function(username, password, done) {
      db.get(`SELECT * FROM Employees WHERE email = ?`,[username], async (err, user) => {
        if (password)
        {
          console.log("testfor " + password)
          const res = await argon2.verify(user.password, password + process.env.SALT)
          if (res)
            done(err, user)
          else 
            done(err, null)
        }
        else
          done(err, null)
      })
    }
  ));
  
  passport.serializeUser((user, done) => {
    done(null, user.email);
  });

  passport.deserializeUser((id, done) => {
    db.get(`SELECT * FROM Employees WHERE email = ?`,[username], (err, user) => {
      console.log(user)
      if (user)
        done(err, user)
      else
        done(err, null);
    });
  });
}


/**
 * Sets up express
 */
function setupExpress() {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(cors());
  app.use(express.json());
  app.use(passport.initialize());
  app.use(passport.session());  
  setupPassport()

  // Route Middlewares
  app.use('/api', authRoute);
  app.use('/api', analyticRoute);
  app.use('/api', meetingRoute);


  var HTTP_PORT = 5000
  // Start server
  app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT))
  }); 
}

setupExpress();