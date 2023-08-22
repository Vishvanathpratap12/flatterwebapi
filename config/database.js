var mysql = require('mysql2');
 
  const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Vishvanath1997",
    database:"sys",
    port:3306
  });
  module.exports = conn;
