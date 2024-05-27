const express = require("express");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: "http://mi-dominio.com", // Permitir solo este dominio
  methods: ["GET", "POST"], // Permitir solo estos métodos
  allowedHeaders: ["Content-Type", "Authorization"], // Permitir solo estas cabeceras
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.json({ message: 'Hello from server' });
})

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});