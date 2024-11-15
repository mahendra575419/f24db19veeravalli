var instrument = require('../models/instrument');
// // List of all instrument
// exports.instrument_list = function(req, res) {
// res.send('NOT IMPLEMENTED: instrument list');
// };

// List of all instruments
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
        if (req.body.instrument_type) toUpdate.instrument_type = req.body.instrument_type;
        if (req.body.cost) toUpdate.cost = req.body.cost;
        if (req.body.size) toUpdate.size = req.body.size;
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

    