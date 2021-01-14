/* ---------------------------------------------------------------
**Mysql database connection
Change this respective connection in the server for each connection
------------------------------------------------------------------*/
var knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : '1234',
      database : 'kumar_vista'
    }
  });
  module.exports = knex;
