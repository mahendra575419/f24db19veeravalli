var express = require('express');
var router = express.Router();
var instrument_controllers = require('../controllers/instrument');

/* GET home page. */
router.get('/',instrument_controllers.instrument_view_all_Page);


router.get('/create',instrument_controllers.instrument_create_post);


module.exports = router;
