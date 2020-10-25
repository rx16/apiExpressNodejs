//Rutas y metodos de la API REST

//Pool de conexiones de mysql
const pool = require("../data/config");

// Enrutador de endpoints
const router = (app) => {
  app.get("/", (request, response) => {
    response.send({
      message: "Mi API REST con Node.js y Express",
    });
  });
  //Listar todos los usuarios
  app.get("/users", (request, response) => {
    pool.query("SELECT * FROM users", (error, result) => {
      if (error) throw error;
      response.send(result);
    });
  });
  //Listar datos de un usuario pasando su id como parametro en la url
  app.get("/users/:id", (request, response) => {
    const id = request.params.id;
    pool.query("SELECT * FROM users WHERE id = ?", id, (error, result) => {
      if (error) throw error;
      response.send(result);
    });
  });
  //Añadir un nuevo usuario
  app.post("/users", (request, response) => {
    pool.query("INSERT INTO users SET ?", request.body, (error, result) => {
      if (error) throw error;
      response.status(201).send(`Usuario ingresado con id: ${result.insertId}`);
    });
  });
  //Editar los datos de un usuario
  app.put("/users/:id", (request, response) => {
    const id = request.params.id;
    pool.query(
      "UPDATE users SET ? WHERE id = ?",
      [request.body, id],
      (error, result) => {
        if (error) throw error;
        response.send("Se editaron los datos del usuario");
      }
    );
  });
};

//Exporta el enrutador
module.exports = router;
