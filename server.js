const http = require('http');
const { db, Page, User } = require('./models');
const app = require('./app');
const server = http.createServer(app);

const PORT = 3000;

const init = async () => {
  await db.sync();

  server.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
  });
};

init();
