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
    const users = await User.findAll();
    res.send(userList(users));
  } catch (error) {
    next(error);
  }
});

router.get('/:userId', async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId);
    const pages = await Page.findAll({
      where: {
        authorId: req.params.userId,
      },
    });

    res.send(userPages(user, pages));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
