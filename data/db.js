const mysql = require("mysql2")


const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "db-posts"
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connect to mysql')

})

module.exports = connection;
