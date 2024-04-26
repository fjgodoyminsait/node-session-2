// Importa Express y crea una nueva aplicación Express
const express = require('express')
const app = express()

// Define una ruta para el método GET
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Define el puerto en el que se ejecutará el servidor
const PORT = 3000

// Inicia el servidor en el puerto definido
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})