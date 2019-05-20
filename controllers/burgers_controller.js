const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");
router.get("/", function(req, resp) {
  burger.all(function(data) {
    var hObj = {
      burger: data
    };
    console.log(hObj);
    res.render("index", hObj);
  });
});
