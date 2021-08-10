const router = require('express').Router()
const Joi = require('@hapi/joi')
var db = require('../Database')
const register_user = require("../database/register_user")
const bcrypt = require('bcryptjs')
const nodemailer = require("nodemailer")
const passport = require('passport')

require('dotenv').config()

// Routes
router.post('/register', async (req, res) => {

  // Validation
  const schema = {
    name: Joi.string().min(4).required(),
    email: Joi.string().min(4).required().email(),
    password: Joi.string().min(4).required(),
  }
  
  // Hashing
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(req.body.password, salt)

  // Validate
  const {error} = Joi.validate(req.body, schema)
  const result = await register_user(req.body.name, req.body.email, req.body.password, res)
  res.send({success: result})
})

router.get("/employees", (req, res, next) => {
    var sql = "select * from Employees"
    var params = []
    db.all(sql, params, (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }
      res.status(200).json(rows);
    });
  });
  
  router.get("/employees/:id", (req, res, next) => {
    var sql = "select * from Employees where id = ?"
    var params = [req.params.id]
    db.get(sql, params, (err, row) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "answer":"success",
            "data":row
        })
      });
  });

/**
 * Login route
 */
router.post('/login', passport.authenticate('local'), (req, res) => {
  res.send({success: true})
});

router.delete("/api/employee/:id", (req, res, next) => {
  db.run(
      'DELETE FROM Employees WHERE id = ?',
      req.params.id,
      function (err, result) {
          if (err){
              res.status(400).json({"error": res.message})
              return;
          }
          res.status(200).json({"message":"deleted", changes: this.changes})
  });
})


module.exports = router;