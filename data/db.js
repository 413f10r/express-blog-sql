const mysql = require("mysql2")


const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "posts"
});

connection.connect((err) => {
    if (err) throw err;
    console.log('connect to mysql')

})

module.exports = connection;
