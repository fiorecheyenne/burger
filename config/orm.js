const connect = require("./connection.js");

function printqs(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

function toSql(ob) {
  var arr = [];
  for (var key in ob) {
    var val = ob[key];
    if (object.hasOwnProperty.call(ob, key)) {
      if (typeof val === "string" && val.indexOf(" ") >= 0) {
        val = "'" + val + "'";
      }
      arr.push(key + "=" + val);
    }
  }
  return arr.toString();
}

const orm = {
  all: function(table, cb) {
    var queryString = "SELECT * FROM " + table + ";";
    connect.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  insert: function(table, col, val, cb) {
    var queryString = "INSERT INTO " + table;
    queryString += "(";
    queryString += col.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printqs(val.length);
    queryString += ") ";
    console.log(queryString);

    connect.query(queryString, val, function(err, result) {
      {
        if (err) throw err;
      }
      cb(result);
    });
  },
  update: function(table, colVals, cond, cb) {
    var queryString = "UPDATE " + table;
    queryString += " SET ";
    queryString += toSql(colVals);
    queryString += " WHERE ";
    queryString += cond;

    console.log(queryString);
    connect.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

module.exports = orm;
