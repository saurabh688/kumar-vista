/* -----------------------------------------------------------------
**Variable declaration
-------------------------------------------------------------------*/
var express = require('express');
var router = express.Router();
var ctrlMysqlCrud = require('../../controllers/crudmysql.controllers.js')

/* ---------------------------------------------------------------
** Set Routes
---------------------------------------------------------------- */

//Used during update table using mysqlcrud update method
router
  .route('/updateData')
  .post(ctrlMysqlCrud.updateData)

//Used during create table using mysqlcrud create method  
router
  .route('/createData')
  .post(ctrlMysqlCrud.createData)

//Used during retrive record using mysqlcrud retrieveByKey method  
router
  .route('/retrieveByKey')
  .post(ctrlMysqlCrud.retrieveByKey)


module.exports = router;
