const router = require('express').Router()
const Joi = require('@hapi/joi')
var db = require('../Database')
const bcrypt = require('bcryptjs')
const nodemailer = require("nodemailer")

require('dotenv').config()

// Email
const mailhost = process.env.MAIL_HOST
const mailport = process.env.MAIL_PORT
const mailemail = process.env.MAIL_EMAIL
const mailpass = process.env.MAIL_PASSWORD

const contactEmail = nodemailer.createTransport({
  host: mailhost,
  port: mailport,
  auth: {
    user: mailemail,
    pass: mailpass,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

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

  var data = {
      name: req.body.name,
      email: req.body.email,
      password : hashedPassword
  }
  var sql ='INSERT INTO Employees (name, email, password) VALUES (?,?,?)'
  var params =[data.name, data.email, data.password]
  db.run(sql, params, function () {
      if (error){
          res.json({ "answer": "password_too_short"});
          res.status(400)
          return;
      } else {
      res.json({
          "answer": "Success",
      })
      const mail = {
        from: data.name,
        to: data.email,
        subject: "User Registration",
        html: `<p>${data.name} is successfuly registered!</p>`,
      };
      contactEmail.sendMail(mail, (error) => {
        if (error) {
          res.json({ status: "failed" });
        } else {
          res.json({ status: "sent" });
        }
      });
      res.status(200)
    }
  });
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

  router.post('/login', (req, res) => {
    const  email  =  req.body.email;
    const  password  =  req.body.password;
    const  findUserByEmail  = (email, cb) => {
      return  db.get(`SELECT * FROM Employees WHERE email = ?`,[email], (err, row) => {
              cb(err, row)
      });
  }
    findUserByEmail(email, (err, user)=>{
        if (err){
          res.json({"answer":"Server error!"});
          res.status(500)
          return
        }
        if (!user){
          res.json({"answer":"UserError"});
          res.status(404)
          return
        }
        const  result  =  bcrypt.compareSync(password, user.password);
        if(!result){
          res.json({"answer":"PassError"});
          res.status(401)
          return
        } 
        res.status(200)
        res.json({
          "answer":"Success",
        })

    });
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