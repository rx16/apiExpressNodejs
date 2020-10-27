//Requerimientos necesarios para poner en funcionamiento el servidor
const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
//const routes = require("../apiExpress/routes/routes");
const PORT = process.env.PORT || 3001;
//const pool = require("../data/config");
const app = express();

//Uso body-parser para el parseo de objetos json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const users = [
  {
    id: "1",
    dni: "12456332",
    name: "Pedro Verona",
    tel: "2954664588",
    email: "pedritov@gmail.com",
  },
  {
    id: "2",
    dni: "23415311",
    name: "Laura Quiroga",
    tel: "2302354491",
    email: "lauraquiroga@gmail.com",
  },
];

//Configuracion para base de datos de heroku
const config = {
  host: "us-cdbr-east-02.cleardb.com",
  user: "bdb1fd02f5388a",
  password: "512f33a3",
  database: "heroku_7035080c4c6f3b2",
  ssl:0
};
const sql = mysql.createConnection(config);

//Listar todos los usuarios
app.get("/users", (request, response) => {
  // response.send(users);
  sql.query("SELECT * FROM users", (error, result) => {
    if (error) throw error;
    response.send(result);
  });
});
//Listar datos de un usuario pasando su id como parametro en la url
app.get("/users/:id", (request, response) => {
  const id = request.params.id;
  // response.send(users[id]);
  sql.query("SELECT * FROM users WHERE id = ?", id, (error, result) => {
    if (error) throw error;
    response.send(result);
  });
});
/*
//Añadir un nuevo usuario
app.post("/users", (request, response) => {
  sql.query("INSERT INTO users SET ?", request.body, (error, result) => {
    if (error) throw error;
    response.status(201).send(`Usuario ingresado con id: ${result.insertId}`);
  });
});
//Editar los datos de un usuario
app.put("/users/:id", (request, response) => {
  const id = request.params.id;
  sql.query(
    "UPDATE users SET ? WHERE id = ?",
    [request.body, id],
    (error, result) => {
      if (error) throw error;
      response.send("Se editaron los datos del usuario");
    }
  );
});
*/
//Pone el servidor en escucha en el puerto 3001
const server = app.listen(PORT, (error) => {
  if (error) return console.log(`Error: ${error}`);
  console.log(`Server listening on ${server.address().port}`);
});
