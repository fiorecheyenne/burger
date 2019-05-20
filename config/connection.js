var mysql = require("mysql");

var connect = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "burgers_db"
});

connect.connect(function(err) {
  if (err) {
    console.log("oops, error: " + err.stack);
    return;
  }
  console.log("Connected as " + connect.threadId);
});

module.exports = connection;
