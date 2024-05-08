// Importamos los módulos necesarios
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Importamos los routers
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// Creamos la aplicación Express
var app = express();

// Configuramos el motor de vistas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Configuramos los middlewares
app.use(logger('dev')); // Para registrar las solicitudes HTTP
app.use(express.json()); // Para parsear el cuerpo de las solicitudes JSON
app.use(express.urlencoded({ extended: false })); // Para parsear el cuerpo de las solicitudes URL-encoded
app.use(cookieParser()); // Para parsear las cookies
app.use(express.static(path.join(__dirname, 'public'))); // Para servir archivos estáticos

// Configuramos los routers
app.use('/', indexRouter);
app.use('/users', usersRouter);

// Middleware para manejar errores 404
app.use(function(req, res, next) {
  next(createError(404));
});

// Middleware para manejar errores
app.use(function(err, req, res, next) {
  // Configuramos las variables locales, solo proporcionamos el error en desarrollo
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Renderizamos la página de error
  res.status(err.status || 500);
  res.render('error');
});

// Exportamos la aplicación
module.exports = app;