//Setup Express
const express = require("express");
const app = express();
const port = 3000;

//Setup Handlebars
const handlebars = require("express-handlebars");
app.engine("handlebars", handlebars( {
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

//Setup body-parser
app.use(express.urlencoded({extended: false}));

//Setup cookie-parser
const cookieParser = require("cookie-parser");
app.use(cookieParser());

//Make public folder available statically
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

//Setup routes
const routes = require("./routes/routes.js");
app.use(routes);

//Server running message and log
app.listen(port, function () {
    console.log(`message app listening on port ${port}!`)
});