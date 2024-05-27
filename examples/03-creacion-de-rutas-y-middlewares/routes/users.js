var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({ name: 'John Doe' });
  // res.send({ some: 'json' });
  // res.send('respond with a resource');
});

router.post('/', (req, res) => {
  console.log('Usuario enviado desde el cliente:', req.body);
  // Aquí iría la lógica para crear un usuario
  res.json({ ...req.body, id: 1 });
});

module.exports = router;
