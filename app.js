//Requerimientos necesarios para poner en funcionamiento el servidor
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");
const PORT = process.env.PORT || 3001;
const app = express();

//Uso body-parser para el parseo de objetos json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//LLama al enrutador
routes(app);
//Pone el servidor en escucha en el puerto asignado
const server = app.listen(PORT, () => {
  console.log(`Server listening on ${server.address().port}`);
});
