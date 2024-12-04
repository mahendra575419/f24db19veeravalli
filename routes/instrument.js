var express = require('express');
var router = express.Router();
var instrument_controllers = require('../controllers/instrument');
// A little function to check if we have an authorized user and continue on
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}
 
/* GET home page. */
router.get('/',instrument_controllers.instrument_view_all_Page);
 
/* GET detail instrument page */
router.get('/detail',instrument_controllers.instrument_view_one_Page);
 
/* GET create instrument page */
router.get('/create',secured,instrument_controllers.instrument_create_Page);
 
/* GET create update page */
router.get('/update',secured, instrument_controllers.instrument_update_Page);
 
/* GET delete instrument page */
router.get('/delete',secured,instrument_controllers.instrument_delete_Page);
 
 
 
router.get('/create',instrument_controllers.instrument_create_post);
// GET request for one instrument.
router.get('/instrument/:id', instrument_controllers.instrument_detail);
router.post('/', instrument_controllers.instrument_create_post);
router.put('/instrument/:id', instrument_controllers.instrument_update_put);
module.exports = router;
 