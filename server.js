const http = require('http');
const { db } = require('./models');
const app = require('./app');
const server = http.createServer(app);

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
