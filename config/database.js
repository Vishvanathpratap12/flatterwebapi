var mysql = require('mysql');
 
  const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Vishvanath1997",
    database:"sys"
  });
  module.exports = conn;
