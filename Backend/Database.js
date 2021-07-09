var sqlite3 = require('sqlite3').verbose()
const bcrypt = require('bcryptjs')


const DBSOURCE = "db.sqlite"

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
                    // Hashing
                    var salt = bcrypt.genSaltSync(10);
                    var hashedPassword = bcrypt.hashSync("admin123456", salt);
                    // Table just created, creating some rows
                    var insertUsers = 'INSERT INTO Employees (name, email, password) VALUES (?,?,?)'
                    db.run(insertUsers, ["admin","admin@example.com", hashedPassword])
            
                    }
                });
                }
            });



module.exports = db