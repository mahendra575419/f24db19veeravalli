var express = require('express');
var router = express.Router();
var instrument_controllers = require('../controllers/instrument');

/* GET home page. */
router.get('/',instrument_controllers.instrument_view_all_Page);


router.get('/create',instrument_controllers.instrument_create_post);
// GET request for one instrument.
router.get('/instrument/:id', instrument_controllers.instrument_detail);
router.post('/', instrument_controllers.instrument_create_post);
router.put('/instrument/:id', instrument_controllers.instrument_update_put);
module.exports = router;
