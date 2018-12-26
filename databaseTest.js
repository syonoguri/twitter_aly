var mysql = require("/usr/local/lib/node_modules/mysql");
var connection = mysql.createConnection({
    host:"localhost",
    database:"MySQL80",
    user:"dbuser",
    password:"syouzi11"
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
    }
});

//insert
var query2 = connection.query("insert into members(name,email) values('test','test@test.com')");

connection.end();