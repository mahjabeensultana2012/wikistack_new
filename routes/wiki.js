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

router.get('/', async (req, res, next) => {
  try {
    const pages = await Page.findAll();
    res.send(main(pages));
  } catch (error) {
    next(error);
  }
});

// router.post('/', async (req, res, next) => {
//   const page = new Page(req.body);
//   try {
//     await page.save();
//     res.redirect(`/wiki/${page.slug}`);
//   } catch (err) {
//     next(err);
//   }
// });

router.post('/', async (req, res, next) => {
  const page = new Page(req.body);
  try {
    const [user, wasCreated] = await User.findOrCreate({
      where: {
        name: req.body.name,
        email: req.body.email,
      },
    });
    const page = await Page.create(req.body);
    page.setAuthor(user);
    res.redirect(`/wiki/${page.slug}`);
  } catch (error) {
    next(error);
  }
});

// router.get('/add', (req, res, next) => {
//   res.send('got to /wiki/add');
// });

router.get('/add', (req, res, next) => {
  res.send(addPage());
});

// /wiki/:slug

// router.get('/:slug', (req, res, next) => {
//   res.send('dynamic route: ' + req.params.slug);
// });

router.get('/:slug', async (req, res, next) => {
  try {
    const page = await Page.findOne({
      where: {
        slug: req.params.slug,
      },
    });
    res.json(wikiPage(page));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
