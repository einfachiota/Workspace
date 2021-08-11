var sqlite3 = require('sqlite3').verbose()
const bcrypt = require('bcryptjs')
const register_user = require("./database/register_user")

const DBSOURCE = "db.sqlite"
require('dotenv').config()

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        // Cannot open database
        console.error(err.message)
        throw err
    } else {
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE Employees (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text UNIQUE, 
            email text UNIQUE, 
            password text, 
            CONSTRAINT email_unique UNIQUE (email),
            CONSTRAINT name_unique UNIQUE (name)
            )`,
            (err) => {
                if (err) {
                    // Table already created
                } else {
                    // First start. Create initial admin user now!
                    if (process.env.INITIAL_ADMIN_PASSWORD && process.env.ADMIN_EMAIL)
                    {
                        register_user("admin", process.env.ADMIN_EMAIL, process.env.INITIAL_ADMIN_PASSWORD )
                        console.log("Created inital user!")
                    }
                    else
                        console.log("[ERROR] Failed to create initial admin user!")
            }
            });



module.exports = db