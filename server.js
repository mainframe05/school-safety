// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ================================================================================
// Express.static will allow you to set a static directory for things like your
// front end javascript, images, etc
// ================================================================================

app.use(express.static(path.join(__dirname,"/app/public")));

// ================================================================================
// ROUTER
// The below points our server to a series of "routing" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================
require("./app/apiRoutes")(app);
require("./app/htmlRoutes")(app);

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

