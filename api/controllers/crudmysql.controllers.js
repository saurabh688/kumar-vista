// --------------------------------------------------------------------------------
// Global declarations 
// --------------------------------------------------------------------------------
var knex = require('../data/mysql-connection.js');
var uuidv4 = require('uuid/v4');
var http = require('http');
// Date related operation
var moment = require('moment');
moment().format();
// Generate random sequence number related declaration
var uuid_TimeStamp = moment().format('YYYYMMDDHHmmssSSS');
var anyid = require('anyid').anyid;
var uuid = anyid().encode('0').length(4).random();
// Log related declaration
var log4js = require('log4js');
var log = log4js.getLogger("crud");

var currentDate = new Date();
/* -------------------------------------------------------------------------------
Purpose: API to insert records into mysql database
----------------------------------------------------------------------------------*/

module.exports.createData = function (req, res) {
  //console.log("res in createData > ");

  try {
    var jsonObj;
    var moduleName;
    var moduleInfo;
    var tableName;
    var returnData = {};

    if (req.body) {

      jsonObj = JSON.parse(JSON.stringify(req.body, null, 3));
    } else {

      jsonObj = req;

    }

    //("res in createData jsonObj > " + JSON.stringify(jsonObj));

    //console.log("res in createData jsonObj.createData > " + JSON.stringify(jsonObj.createData));

    tableName = jsonObj.tableName;
    moduleName = jsonObj.moduleName;
    moduleInfo = jsonObj.moduleInfo + '> crud.controllers > createData';
    jsonObj.createData[0].createdDate = currentDate;
    jsonObj.createData[0].updatedDate = currentDate;
    knex(tableName).returning('id').insert(jsonObj.createData).then(function (records) {
      //console.log("records : " + records);

      returnData.code = 200;
      returnData.moduleName = moduleName;
      returnData.moduleInfo = moduleInfo;
      returnData.message = "Data inserted successfully!";
      returnData.error = "";
      returnData.data = records;


      if (req.body) {
        res
          .status(200)
          .json(returnData)

      } else {
        res(returnData)
      }
    })
  } catch (err) {
    log.error(moduleName + '>' + moduleInfo + '->catched error=> ' + err);
  }
}

/* -------------------------------------------------------------------------------
Purpose: API to Query All Records from Database
----------------------------------------------------------------------------------*/
module.exports.retrieveAll = function (req, res) {
  try {
    var jsonObj;
    var moduleName;
    var moduleInfo;
    var tableName;

    if (req.body) {
      jsonObj = JSON.parse(JSON.stringify(req.body, null, 3));
    } else {
      jsonObj = req;
    }
    tableName = jsonObj.tableName;
    moduleName = jsonObj.moduleName;
    moduleInfo = jsonObj.moduleInfo + '> crud.controllers > retrieveAll';

    knex.select().from(tableName).then(function (records) {
      if (req.body) {
        res
          .status(200)
          .json(records)
      } else {
        res(records)
      }
    })
  } catch (err) {
    log.error(moduleName + '>' + moduleInfo + '->catched error=> ' + err);
  }
}

/* -------------------------------------------------------------------------------
Purpose: API to Query Records with specific condition 
----------------------------------------------------------------------------------*/
module.exports.retrieveByKey = function (req, res) {
  //console.log("retrive by key");
  try {
    var jsonObj;
    var moduleName;
    var moduleInfo;
    var tableName;
    var retrieveKey;
    var returnData = {};

    if (req.body) {
      jsonObj = JSON.parse(JSON.stringify(req.body, null, 3));
    } else {
      jsonObj = req;
    }
    tableName = jsonObj.tableName;
    retrieveKey = jsonObj.retrieveKey;
    moduleName = jsonObj.moduleName;
    moduleInfo = jsonObj.moduleInfo + '> crud.controllers > retrieveByKey';

    knex(tableName).where(retrieveKey).select().then(function (records) {

      //console.log("records in retrieveByKey method : " + JSON.stringify(records));

      returnData.code = 200;
      returnData.moduleName = moduleName;
      returnData.moduleInfo = moduleInfo;
      returnData.message = "Data retrieved successfully!";
      returnData.error = "";
      returnData.data = records;

      if (req.body) {
        res
          .status(200)
          .json(returnData)
      } else {
        res(returnData)
      }
    })
  } catch (err) {
    log.error(moduleName + '>' + moduleInfo + '->catched error=> ' + err);
  }
}


module.exports.retrieveByMultipleCondition = function (req, res) {
  //console.log("retrieveByMultipleCondition");
  try {
    var jsonObj;
    var moduleName;
    var moduleInfo;
    var tableName;
    var retrieveKey;
    var condition1;
    var condition2;
    var returnData = {};

    if (req.body) {
      jsonObj = JSON.parse(JSON.stringify(req.body, null, 3));
    } else {
      jsonObj = req;
    }
    tableName = jsonObj.tableName;
    retrieveKey = jsonObj.retrieveKey;
    moduleName = jsonObj.moduleName;
    condition1 = jsonObj.condition1;
    condition2 = jsonObj.condition2;

    moduleInfo = jsonObj.moduleInfo + '> crud.controllers > retrieveByKey';

    knex(tableName).where(retrieveKey).andWhere(condition1, condition2).select().then(function (records) {

      //console.log("records in retrieveByKey method : " + JSON.stringify(records));

      returnData.code = 200;
      returnData.moduleName = moduleName;
      returnData.moduleInfo = moduleInfo;
      returnData.message = "Data retrieved successfully!";
      returnData.error = "";
      returnData.data = records;

      if (req.body) {
        res
          .status(200)
          .json(returnData)
      } else {
        res(returnData)
      }
    })
  } catch (err) {
    log.error(moduleName + '>' + moduleInfo + '->catched error=> ' + err);
  }
}

module.exports.retrieveByMultipleConditionDistinct = function (req, res) {
 // console.log("retrieveByMultipleCondition");
  try {
    var jsonObj;
    var moduleName;
    var moduleInfo;
    var tableName;
    var retrieveKey;
    var condition1;
    var condition2;
    var distinctName;
    var returnData = {};

    if (req.body) {
      jsonObj = JSON.parse(JSON.stringify(req.body, null, 3));
    } else {
      jsonObj = req;
    }
    tableName = jsonObj.tableName;
    retrieveKey = jsonObj.retrieveKey;
    moduleName = jsonObj.moduleName;
    condition1 = jsonObj.condition1;
    condition2 = jsonObj.condition2;
    distinctName = jsonObj.distinctName

    moduleInfo = jsonObj.moduleInfo + '> crud.controllers > retrieveByKey';

    knex(tableName).distinct(distinctName).where(retrieveKey).andWhere(condition1, condition2).select().then(function (records) {

      console.log("records in retrieveByKey method retrieveByMultipleConditionDistinct : " + JSON.stringify(records));

      returnData.code = 200;
      returnData.moduleName = moduleName;
      returnData.moduleInfo = moduleInfo;
      returnData.message = "Data retrieved successfully!";
      returnData.error = "";
      returnData.data = records;

      if (req.body) {
        res
          .status(200)
          .json(returnData)
      } else {
        res(returnData)
      }
    })
  } catch (err) {
    log.error(moduleName + '>' + moduleInfo + '->catched error=> ' + err);
  }
}





module.exports.retrieveByCondition = function (req, res) {
  //console.log("retrive by key");
  try {
    var jsonObj;
    var moduleName;
    var moduleInfo;
    var tableName;
    var retrieveKey;
    var returnData = {};

    if (req.body) {
      jsonObj = JSON.parse(JSON.stringify(req.body, null, 3));
    } else {
      jsonObj = req;
    }
    tableName = jsonObj.tableName;
    retrieveKey = jsonObj.retrieveKey;
    moduleName = jsonObj.moduleName;
    moduleInfo = jsonObj.moduleInfo + '> crud.controllers > retrieveByKey';
    condtiont1 = jsonObj.condition1;
    condtiont1 = jsonObj.condition2;
    operator = jsonObj.operator
    if (operator == "AND") {
      knex(tableName).where(retrieveKey).andWhere(condition1, condition2).select().then(function (records) {

        //console.log("records in retrieveByKey method : " + JSON.stringify(records));

        returnData.code = 200;
        returnData.moduleName = moduleName;
        returnData.moduleInfo = moduleInfo;
        returnData.message = "Data retrieved successfully!";
        returnData.error = "";
        returnData.data = records;

        if (req.body) {
          res
            .status(200)
            .json(returnData)
        } else {
          res(returnData)
        }
      })
    } else {
      knex(tableName).where(retrieveKey).orWhere(condition1, condition2).select().then(function (records) {

        //console.log("records in retrieveByKey method : " + JSON.stringify(records));

        returnData.code = 200;
        returnData.moduleName = moduleName;
        returnData.moduleInfo = moduleInfo;
        returnData.message = "Data retrieved successfully!";
        returnData.error = "";
        returnData.data = records;

        if (req.body) {
          res
            .status(200)
            .json(returnData)
        } else {
          res(returnData)
        }
      })
    }

  } catch (err) {
    log.error(moduleName + '>' + moduleInfo + '->catched error=> ' + err);
  }
}



/* -------------------------------------------------------------------------------
Purpose: API to updateData with specific condition
----------------------------------------------------------------------------------*/
module.exports.updateData = function (req, res) {
  //console.log("updateeee")

  try {
    var jsonObj;
    var moduleName;
    var moduleInfo;
    var tableName;
    var updateKey;
    var condition;
    var returnData = {};

    if (req.body) {
      jsonObj = JSON.parse(JSON.stringify(req.body, null, 3));
    } else {
      jsonObj = req;
    }
    tableName = jsonObj.tableName;
    updateKey = jsonObj.updateKey;
    moduleName = jsonObj.moduleName;
    condition = jsonObj.condition;
    updatekey_01 = jsonObj.updatekey_01;
    update_date = jsonObj.update_date;
    moduleInfo = jsonObj.moduleInfo + '> crud.controllers > updateData';
    condition.updatedDate = currentDate;
    knex(tableName).where(updateKey).update(condition).then(function (records) {

      returnData.code = 200;
      returnData.moduleName = moduleName;
      returnData.moduleInfo = moduleInfo;
      returnData.message = "Data updated successfully!";
      returnData.error = "";
      returnData.data = records;
      if (req.body) {
        res
          .status(200)
          .json(returnData)
      } else {
        res(returnData)
      }
    })
  } catch (err) {
    log.error(moduleName + '>' + moduleInfo + '->catched error=> ' + err);
  }
}

/* -------------------------------------------------------------------------------
Purpose: API to updateData with multiple condition
----------------------------------------------------------------------------------*/
module.exports.updateDataByMultipleCondition = function (req, res) {
  //console.log("updateDataByMultipleCondition")

  try {
    var jsonObj;
    var moduleName;
    var moduleInfo;
    var tableName;
    var updateKey;
    var condition;
    var condition1;
    var condition2;
    var returnData = {};

    if (req.body) {
      jsonObj = JSON.parse(JSON.stringify(req.body, null, 3));
    } else {
      jsonObj = req;
    }
    tableName = jsonObj.tableName;
    updateKey = jsonObj.updateKey;
    moduleName = jsonObj.moduleName;
    condition = jsonObj.condition;
    condition1 = jsonObj.condition1;
    condition2 = jsonObj.condition2;

    updatekey_01 = jsonObj.updatekey_01;
    update_date = jsonObj.update_date;
    moduleInfo = jsonObj.moduleInfo + '> crud.controllers > updateData';
    condition.updatedDate = currentDate;
    knex(tableName).where(updateKey).andWhere(condition1, condition2).update(condition).then(function (records) {

      returnData.code = 200;
      returnData.moduleName = moduleName;
      returnData.moduleInfo = moduleInfo;
      returnData.message = "Data updated successfully!";
      returnData.error = "";
      returnData.data = records;
      if (req.body) {
        res
          .status(200)
          .json(returnData)
      } else {
        res(returnData)
      }
    })
  } catch (err) {
    log.error(moduleName + '>' + moduleInfo + '->catched error=> ' + err);
  }
}

/* -------------------------------------------------------------------------------
Purpose: API to delete Records with specific condition
----------------------------------------------------------------------------------*/
module.exports.deleteData = function (req, res) {
 // console.log("deleteee")
  try {
    var jsonObj;
    var moduleName;
    var moduleInfo;
    var tableName;
    var deleteKey;
    var condition;
    var returnData = {};
    if (req.body) {
      jsonObj = JSON.parse(JSON.stringify(req.body, null, 3));
    } else {
      jsonObj = req;
    }
    tableName = jsonObj.tableName;
    deleteKey = jsonObj.deleteKey;
    moduleName = jsonObj.moduleName;
    moduleInfo = jsonObj.moduleInfo + '> crud.controllers > deleteData';

   knex(tableName).where('id',deleteKey).del().then(function (records) {


    returnData.code = 200;
    returnData.moduleName = moduleName;
    returnData.moduleInfo = moduleInfo;
    returnData.message = "Data deleted successfully!";
    returnData.error = "";
    returnData.data = records;
    if (req.body) {
      res
        .status(200)
        .json(returnData)
    } else {
      res(returnData)
    }
    // if (req.body) {
    //   res
    //     .status(200)
    //     .json(records)
    // } else {
    //   res(records)
    // }
  })
  } catch (err) {
    log.error(moduleName + '>' + moduleInfo + '->catched error=> ' + err);
  }
}


/* -------------------------------------------------------------------------------
Purpose: API to delete Records with condition
----------------------------------------------------------------------------------*/
module.exports.deleteByMultipleCondition = function (req, res) {
  // console.log("deleteee")
   try {
     var jsonObj;
     var moduleName;
     var moduleInfo;
     var tableName;
     var deleteKey;
     var condition;
     var returnData = {};
     if (req.body) {
       jsonObj = JSON.parse(JSON.stringify(req.body, null, 3));
     } else {
       jsonObj = req;
     }
     tableName = jsonObj.tableName;
     deleteKey = jsonObj.deleteKey;
     moduleName = jsonObj.moduleName;
     moduleInfo = jsonObj.moduleInfo + '> crud.controllers > deleteData';
     var condition1 = jsonObj.condition1;
     var condition2 = jsonObj.condition2;
 
    knex(tableName).where(condition1,condition2).del().then(function (records) {
 
 
     returnData.code = 200;
     returnData.moduleName = moduleName;
     returnData.moduleInfo = moduleInfo;
     returnData.message = "Data deleted successfully!";
     returnData.error = "";
     returnData.data = records;
     if (req.body) {
       res
         .status(200)
         .json(returnData)
     } else {
       res(returnData)
     }
     // if (req.body) {
     //   res
     //     .status(200)
     //     .json(records)
     // } else {
     //   res(records)
     // }
   })
   } catch (err) {
     log.error(moduleName + '>' + moduleInfo + '->catched error=> ' + err);
   }
 }


