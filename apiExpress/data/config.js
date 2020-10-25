//Configuracion de conexion a la base de datos
const mysql = require("mysql");

const config = {
  host: "localhost",
  user: "rx16",
  password: "iop",
  database: "apiexpress",
};

//Crea un pool de conexiones con mysql
const pool = mysql.createPool(config);

//Exporta pool
module.exports = pool;
