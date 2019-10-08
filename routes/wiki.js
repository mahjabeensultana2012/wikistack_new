const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('got to /wiki');
});
module.exports = router;
