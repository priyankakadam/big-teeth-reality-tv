const express = require("express");
const Router = express.Router();
//const mysqlConnection = require("../connection");
//console.log("mysqlConnection : -------", mysqlConnection);
Router.get("/", (req, res) => {
//   mysqlConnection.query("SELECT * from applicants", (err, rows, fields)=>{
//   if(!err) {
//     res.send(rows);
//   } else {
//     console.log(err);
//   }
//   });
});

module.exports = Router;
