var instrument = require('../models/instrument');
// // List of all instrument
// exports.instrument_list = function(req, res) {
// res.send('NOT IMPLEMENTED: instrument list');
// };

// List of all Costumes
exports.instrument_list = async function(req, res) {
    try{
    theInstruments = await instrument.find();
    res.send(theInstruments);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };


// for a specific instrument.
exports.instrument_detail = function(req, res) {
res.send('NOT IMPLEMENTED: instrument detail: ' + req.params.id);
};
// Handle instrument create on POST.
exports.instrument_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: instrument create POST');
};
// Handle instrument delete from on DELETE.
exports.instrument_delete = function(req, res) {
res.send('NOT IMPLEMENTED: instrument delete DELETE ' + req.params.id);
};
// Handle instrument update form on PUT.
exports.instrument_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: instrument update PUT' + req.params.id);
};
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

    // Handle Costume create on POST.
exports.instrument_create_post = async function(req, res) {
    console.log(req.body)
    let document = new instrument();
    console.log(document,"triggering");
    document.instrument_name = req.body.instrument_name;
    document.type = req.body.type;
    document.year_made = req.body.year_made;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
   
    


    