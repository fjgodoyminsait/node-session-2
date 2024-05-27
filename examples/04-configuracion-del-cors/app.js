const express = require("express");
const cors = require("cors");

const app = express();

// Habilitar CORS para todas las rutas
// app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: 'Hello from server' });
})

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});