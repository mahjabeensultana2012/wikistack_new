const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack_new', {
  logging: false,
});
db.authenticate().then(() => {
  console.log('connected to the database');
});

function generateSlug(title) {
  return title.replace(/\s+/g, '_').replace(/\W/g, '');
}

const Page = db.define('page', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  status: {
    type: Sequelize.ENUM('open', 'closed'),
  },
});

Page.beforeValidate(page => {
  if (!page.slug) {
    page.slug = generateSlug(page.title);
  }
});

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
});

Page.belongsTo(User, { as: 'Author' });
module.exports = {
  db,
  Page,
  User,
};
