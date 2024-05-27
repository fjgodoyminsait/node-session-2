var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

/**
 * `miMiddleware` es una función de middleware en Node.js.
 * El middleware es una función que tiene acceso al objeto de solicitud (req), 
 * al objeto de respuesta (res), y a la siguiente función de middleware en el 
 * ciclo de solicitud/respuesta de la aplicación.
 * 
 * @param {Object} req - El objeto de solicitud.
 * @param {Object} res - El objeto de respuesta.
 * @param {Function} next - La siguiente función de middleware en la pila.
 */
const miMiddleware = (req, res, next) => {
  console.log("ESTE ES UN MIDDLEWARE");
  next(); // Llama a la siguiente función de middleware en la pila
};

app.use(miMiddleware);
// app.get("/usuarios", miMiddleware, (req, res) => {
//   // Lógica para obtener usuarios
//   res.send("Usuarios obtenidos");
// });

module.exports = app;
