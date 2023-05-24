/** @format */

// index.js
// where your node app starts

// init project
require("dotenv").config();
var express = require("express");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
	res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api/whoami", (req, res) => {
	// Define a GET route for the /api/whoami endpoint
	const ipaddress = req.ip; // Get the IP address of the client from the request object
	const language = req.headers["accept-language"]; // Get the preferred language of the client from the request headers
	const software = req.headers["user-agent"]; // Get the user agent string of the client from the request headers
	res.json({ ipaddress, language, software }); // Send a JSON response with the client's IP address, preferred language, and user agent string
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
	console.log("Your app is listening on port " + listener.address().port);
});
