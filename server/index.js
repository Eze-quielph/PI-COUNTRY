const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const port = process.env.PORT || 3301;

function suma(a, b) {
  return a + b;
}

conn.sync().then(() => {
  server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}).catch(error => console.error(error));

    module.exports = suma;