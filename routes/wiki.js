const express = require('express');
const router = express.Router();
const { Page, User } = require('../models');
const {
  addPage,
  editPage,
  main,
  userList,
  userPages,
  wikiPage,
  layout,
} = require('../views');

router.get('/', (req, res, next) => {
  res.send('got to /wiki');
});

router.post('/', async (req, res, next) => {
  const page = new Page(req.body);
  try {
    await page.save();
    res.redirect('/');
  } catch (err) {
    next(err);
  }
});

// router.get('/add', (req, res, next) => {
//   res.send('got to /wiki/add');
// });

router.get('/add', (req, res, next) => {
  res.send(addPage());
});

router.get('/:slug', (req, res, next) => {
  res.send(`hit dynamic route at ${req.params.slug}`);
});

module.exports = router;
