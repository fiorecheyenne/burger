var mysql = require("mysql");
var connect;
// var connect = mysql.createConnection({
//   host: "localhost",
//   port: 8080,
//   user: "root",
//   password: "password",
//   database: "burgers_db"
// });

// connect.connect(function(err) {
//   if (err) {
//     console.log("oops, error: " + err.stack);
//     return;
//   }
//   console.log("Connected as " + connect.threadId);
// });

// module.exports = connect;

if (process.env.JAWSDB_URL) {
  connect = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connect = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "burgers_db"
  });
}

connect.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connect.threadId);
});

module.exports = connect;
