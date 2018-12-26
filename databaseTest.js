var express = require("express");
var http = require("http");
var path = require("path");
var app = express();
var request = require("request")
var bodyParser = require("body-parser");
var morgan = require("morgan");

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(morgan("combined"));
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/form", function(req, res) {
    console.log(req);

    var mysql = require("/usr/local/lib/node_modules/mysql");
    var connection = mysql.createConnection({
        host:"localhost",
        database:"rakutenapplication",
        user:"dbuser",
        password:"gladcubeogr"
    });

    //select
    var query = connection.query("select * from login",function(err,results){

        //display error
        if(err){
            console.log(err);
            return;
        }

        //get rows
        for(var i in results){
            console.log(results[i].name + " " + results[i].password);
            if(req.body.loginName == results[i].name && req.body.loginPassword == results[i].password){
                res.send(true);
                return;
            }
            res.send(false);
        }
    });

//insert
    connection.end();
});

var server = http.createServer(app);
server.listen(3000);
