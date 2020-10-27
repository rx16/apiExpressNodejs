//Configuracion de conexion a la base de datos
const mysql = require("mysql");

//Configuracion para base de datos de heroku
const config = {
  host: "us-cdbr-east-02.cleardb.com",
  user: "bdb1fd02f5388a",
  password: "512f33a3",
  database: "heroku_7035080c4c6f3b2",
  ssl:0
};
// bdb1fd02f5388a:512f33a3@us-cdbr-east-02.cleardb.com/heroku_7035080c4c6f3b2
/*
//Configuracion Local
const config = {
  host: "localhost",
  user: "rx16",
  password: "iop",
  database: "apiexpress",
};
*/

//Crea un pool de conexiones con mysql
const pool = mysql.createPool(config);

//Exporta pool
module.exports = pool;
