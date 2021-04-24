
const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const ApplicantsRoutes =  require("./routes/applicants");
var app = express();
app.use(bodyParser.json());

app.use("/applicants", ApplicantsRoutes);
var mysqlConnection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "password",
    database : "bigteethrealitytv",
    multipleStatements : true
});
console.log("connect: ", mysqlConnection);
mysqlConnection.connect((err) => {
    if(!err)
    {
        console.log("connected");
    } else {

        console.log("Connection Failed", err);
    }
});

app.listen(3000);