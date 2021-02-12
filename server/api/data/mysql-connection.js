/* ---------------------------------------------------------------
**Mysql database connection
Change this respective connection in the server for each connection
------------------------------------------------------------------*/
var knex = require('knex')({
    client: 'mysql',
    connection: {
      host : 'troxdb.mysql.database.azure.com',
      user : 'troxdb@troxdb',
      password : 'Qwerty@12345',
      database : 'kumar_vista'
    }
  });
  module.exports = knex;
