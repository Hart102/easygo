const Mysql = require('mysql')

const conn = Mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "easy10"
});

let table = `CREATE TABLE users (
    id int(11) NOT NULL,
    username varchar(255) NOT NULL,
    phone varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    otp varchar(255) NOT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci`;
conn.connect((err) => {
    if(err) return console.log(err)
    console.log('Connected to database')
    // conn.query("CREATE DATABASE easy4", (err, result) => {
    //     err ? console.log(err) : console.log("Database Created")        
    //     conn.query(table, (err, result) => {
    //         err ? console.log('An error occured while creating table') : console.log('User table created')
    //     })
    // })

})
module.exports = conn






// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "yourusername",
//   password: "yourpassword"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query("CREATE DATABASE mydb", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });
// });