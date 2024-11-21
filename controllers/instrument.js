var instrument = require('../models/instrument');
// // List of all instrument
// exports.instrument_list = function(req, res) {
// res.send('NOT IMPLEMENTED: instrument list');
// };
 
// List of all instruments
exports.instrument_list = async function(req, res) {
    try{
    theinstruments = await instrument.find();
    res.send(theinstruments);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
 
 
// for a specific instrument.
// exports.instrument_detail = function(req, res) {
// res.send('NOT IMPLEMENTED: instrument detail: ' + req.params.id);
// };
// Handle instrument create on POST.
exports.instrument_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: instrument create POST');
};
// Handle instrument delete from on DELETE.
exports.instrument_delete = function(req, res) {
res.send('NOT IMPLEMENTED: instrument delete DELETE ' + req.params.id);
};
// Handle instrument update form on PUT.
// exports.instrument_update_put = function(req, res) {
// res.send('NOT IMPLEMENTED: instrument update PUT' + req.params.id);
// };
// VIEWS
// Handle a show all view
exports.instrument_view_all_Page = async function(req, res) {
    try{
    theinstrument = await instrument.find();
    res.render('instrument', { title: 'instrument Search Results', results: theinstrument });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
 
    // Handle instrument create on POST.
exports.instrument_create_post = async function(req, res) {
    console.log(req.body)
    let document = new instrument();
    
    document.instrument_name = req.body.instrument_name;
    document.instrument_type = req.body.instrument_type;
    document.instrument_yr = req.body.instrument_yr;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
   
   
// for a specific instrument.
exports.instrument_detail = async function(req, res) {
console.log("detail" + req.params.id)
try {
result = await instrument.findById( req.params.id)
res.send(result)
} catch (error) {
res.status(500)
res.send(`{"error": document for id ${req.params.id} not found`);
}
};
 
// // Handle instrument update form on PUT.
// exports.instrument_update_put = async function(req, res) {
// console.log(`update on id ${req.params.id} with body
// ${JSON.stringify(req.body)}`)
// try {
// let toUpdate = await instrument.findById( req.params.id)
// // Do updates of properties
// if(req.body.instrument_type)
// toUpdate.instrument_type = req.body.instrument_type;
// if(req.body.cost) toUpdate.cost = req.body.cost;
// if(req.body.size) toUpdate.size = req.body.size;
// let result = await toUpdate.save();
// console.log("Sucess " + result)
// res.send(result)
// } catch (err) {
// res.status(500)
// res.send(`{"error": ${err}: Update for id ${req.params.id}
// failed`);
// }
// };
// if(req.body.checkboxsale) toUpdate.sale = true;
// else toUpdate.sale= false;
 
// Handle instrument update form on PUT.
exports.instrument_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`); // Log request details
    try {
        // Find the instrument by ID
        let toUpdate = await instrument.findById(req.params.id);
 
        // Update the instrument properties if they are provided in the request body
        if (req.body.instrument_name) toUpdate.instrument_name = req.body.instrument_name;
        if (req.body.instrument_type) toUpdate.instrument_type= req.body.instrument_type;
        if (req.body.instrument_yr) toUpdate.instrument_yr = req.body.instrument_yr;
        if (req.body.checkboxsale) toUpdate.sale = true;
        else toUpdate.sale = false;
 
        // Save the updated document
        let result = await toUpdate.save();
        console.log("Success " + result);
        res.send(result); // Send the updated document as JSON
    } catch (err) {
        res.status(500); // Internal server error status code
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed}`);
    }
};
 
// Handle instrument delete on DELETE.
exports.instrument_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await instrument.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
 
    // Handle a show one view with id specified by query
exports.instrument_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await instrument.findById( req.query.id)
    res.render('instrumentdetail',
    { title: 'instrument Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
 
    // Handle building the view for creating a instrument.
// No body, no in path parameter, no query.
// Does not need to be async
exports.instrument_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('instrumentcreate', { title: 'instrument Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
 
 
    // Handle building the view for updating a instrument.
// query provides the id
exports.instrument_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await instrument.findById(req.query.id)
    res.render('instrumentupdate', { title: 'instrument Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
 
    // Handle a delete one view with id from query
exports.instrument_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await instrument.findById(req.query.id)
    res.render('instrumentdelete', { title: 'instrument Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
   
   
   
   
 
   
 
   
 