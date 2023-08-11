const server = require("./src/server");
const { conn } = require('./src/db.js');
require('dotenv').config();
const PORT = process.env.PORT ?? 3001;

conn.sync().then(() => {
  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}).catch(error => console.error(error));
