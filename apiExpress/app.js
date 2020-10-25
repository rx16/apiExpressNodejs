//Requerimientos necesarios para poner en funcionamiento el servidor
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("../apiExpress/routes/routes");
const PORT = 3001;
const app = express();

//Uso body-parser para el parseo de objetos json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Metodo GET a la raíz de la API
routes(app);
/*
app.get("/", (request, response) => {
  console.log(`URL: ${request.url} `);
  response.send({ message: "API REST on Node.js Server" });
});
*/

//Pone el servidor en escucha en el puerto 3001
const server = app.listen(PORT, (error) => {
  if (error) return console.log(`Error: ${error}`);
  console.log(`Server listening on ${server.address().port}`);
});
