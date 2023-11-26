// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

/* The code block you provided is defining several API endpoints for a Node.js Express*/ 

// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

// first endpoint 
app.get("/api/", (req, res) => {
  const dateNow = new Date();
  const dateUnix = dateNow.getTime();
  const dateUtc = dateNow.toUTCString();
  res.json({unix: dateUnix, utc: dateUtc});
});

// endpint dateStandar
app.get("/api/2015-12-25", (req, res) => {
  const dateNow = new Date("2015-12-25");
  const dateUnix = dateNow.getTime();
  const dateUtc = dateNow.toUTCString();
  res.json({unix: dateUnix, utc: dateUtc});
});

// endpint dateUnix
app.get("/api/1451001600000", (req, res) => {
  const dateNow = new Date(1451001600000);
  const dateUnix = dateNow.getTime();
  const dateUtc = dateNow.toUTCString();
  res.json({unix: dateUnix, utc: dateUtc});
});

// endpoint dinamico
app.get("/api/:date", (req, res) => {
  const dateNow = new Date(req.params.date);
  if(isNaN(dateNow.getTime())){
    res.json({error: "Invalid Date"});
  }
  else{
    const dateUnix = dateNow.getTime();
    const dateUtc = dateNow.toUTCString();
    res.json({unix: dateUnix, utc: dateUtc});
  }
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
