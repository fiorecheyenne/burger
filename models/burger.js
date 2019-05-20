const orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },

  update: function(colVal, condit, cb) {
    orm.update("burgers", colVal, condit, function(resp) {
      cb(resp);
    });
  },
  delete: function(condit, cb) {
    orm.delete("burgers", condit, function(resp) {
      cb(resp);
    });
  }
};

module.exports = burger;
