// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

//Import the mongoose module
var mongoose = require('mongoose');
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   


	// //Set up default mongoose connection
	// var mongoDB = 'mongodb://127.0.0.1/dailydairy';
	// mongoose.connect(mongoDB);
	// // Get Mongoose to use the global promise library
	// mongoose.Promise = global.Promise;
	// //Get the default connection
	// var db = mongoose.connection;

	// //Bind connection to error event (to get notification of connection errors)
	// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// 	var util = require('util');
// var async = require('async');
// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// mongoose.connect('mongodb://myusername:mypassword@3ouojekljs8.mongolab.com:398948/mydatabase-database');

// var bookingSchema = {
//   date: String,
//   event: String,
//   name: String,
//   phone: String,
//   email: String,
//   obs: String
// };

// var Booking = mongoose.model('Booking', bookingSchema);

// Booking.find({}, function(err, bookings) {
//     async.each(bookings, booking, function(booking, next) {
//         console.log(util.format('%s: %s', booking.name, booking.phone));
//     }, function(err) {
//         console.log('done reading records');
//     });
// });

var mongoose = require('mongoose');
 
mongoose.connect('mongodb://127.0.0.1/dailydairy', function (err) {
 
   if (err) throw err;
 
   console.log('Successfully connected');
 
});

// Define schema
var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
    a_string: String,
    a_date: Date,
    name: String
});

// Compile model from schema
var SomeModel = mongoose.model('SomeModel', SomeModelSchema );

// Create an instance of model SomeModel
var awesome_instance = new SomeModel({ name: 'awesome' });

// Save the new model instance, passing a callback
awesome_instance.save(function (err) {
  if (err) return handleError(err);
  // saved!
});


});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
