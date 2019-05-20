const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hObj = {
      burgers: data
    };
    console.log(hObj);
    res.render("index", hObj);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.create(
    ["burger_name", "devoured"],
    [req.body.burger_name, req.body.devoured],
    function(result) {
      res.json({ id: result.insertId });
    }
  );
});

router.put("/api/burgers/:id", function(req, res) {
  var condit = "id = " + req.params.id;

  console.log("condit", condit);

  burger.update(
    {
      devoured: req.body.devoured
    },
    condit,
    function(result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

router.delete("/api/burgers/:id", function(req, res) {
  var condit = "id= " + req.params.id;

  burger.delete(condit, function(result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
