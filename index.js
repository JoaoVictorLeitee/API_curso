const express = require("express");
const routes = require("./routes");

//cria novo app express
const app = express();

//configura o express para usar json
app.use(express.json());
app.use(routes);


app.listen(3001);