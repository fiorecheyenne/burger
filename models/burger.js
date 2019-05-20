const orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },

  update: function(colVal, condit, cb) {
    orm.update("burgers", colVal, condit, function(res) {
      cb(res);
    });
  },
  delete: function(condit, cb) {
    orm.delete("burgers", condit, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;
