/* -----------------------------------------------------------------
**Variable declaration
-------------------------------------------------------------------*/
var express = require('express');
var router = express.Router();
var ctrlMySqlCrud = require('../../controllers/crudmysql.controllers.js');

/* -----------------------------------------------------------------
**Set Routes
-------------------------------------------------------------------*/
router
  .route('/createData')
  .post(ctrlMySqlCrud.createData);

router
  .route('/retrieveAll')
  .post(ctrlMySqlCrud.retrieveAll);

router
  .route('/retrieveByKey')
  .post(ctrlMySqlCrud.retrieveByKey);

router
  .route('/updateData')
  .post(ctrlMySqlCrud.updateData);

router
  .route('/deleteData')
  .post(ctrlMySqlCrud.deleteData);

router
  .route('/retrieveByMultipleCondition')
  .post(ctrlMySqlCrud.retrieveByMultipleCondition);
  
  router
  .route('/retrieveByMultipleConditionDistinct')
  .post(ctrlMySqlCrud.retrieveByMultipleConditionDistinct);

  router
  .route('/updateDataByMultipleCondition')
  .post(ctrlMySqlCrud.updateDataByMultipleCondition);

  
router
  .route('/retrieveByCondition')
  .post(ctrlMySqlCrud.retrieveByCondition);

router
   .route('/deleteByMultipleCondition')
   .post(ctrlMySqlCrud.deleteByMultipleCondition);

module.exports = router;
