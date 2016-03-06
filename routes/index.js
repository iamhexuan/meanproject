var express = require('express');
var router = express.Router();
var ctrl = require('../app_server/controls/index');
/* GET home page. */
router.get('/', ctrl.index);

module.exports = router;
