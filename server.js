const express = require("express");
var exphbs = require("express-handlebars");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static(__dirname + "/public"));

app.engine("handlebars", exphbs({ extended: false }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("App listening on port: " + PORT);
});
