/* ----------------------------------------------------------------




---------------------------------------------------------------- */


var express = require("express");
var key = process.env.NODE_KEY;
var app = express();



app.use("/static", express.static(path.join(__dirname,"static")));

app.set("views", path.join(__dirname, "templates" ));
app.set("view engine", "pug");

app.get("/", function(req, res) {
    return res.render("index", {title: "Hello World" });
});



var server = http.createServer(app);
server.listen(3000);