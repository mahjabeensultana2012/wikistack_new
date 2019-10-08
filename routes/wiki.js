const express = require('express');
const router = express.Router();
const { addPage } = require('../views');
router.get('/', (req, res, next) => {
  res.send('got to /wiki');
});

router.post('/', (req, res, next) => {
  res.send('got to /wiki');
});

// router.get('/add', (req, res, next) => {
//   res.send(addPage());
// });

module.exports = router;
