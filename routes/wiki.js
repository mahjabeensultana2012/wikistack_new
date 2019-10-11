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

router.get('/:slug', async (req, res, next) => {
  try {
    const page = await Page.findOne({
      where: {
        slug: req.params.slug,
      },
    });
    res.json(page);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
