var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
  
  
// default route
app.get('/api/', function (req, res) {
    return res.send({ error: true, message: 'hello' })
});
 
// set port
app.listen(5000, '192.168.1.162', function () {
    console.log('Node app is running on port 5000');
});

var contact = require('./contacts.js');

//both index.js and things.js should be in same directory
app.use('/api/contact', contact);


var group = require('./groups.js');

//both index.js and things.js should be in same directory
app.use('/api/group', group);

var contactGroup = require('./contact_group.js');

//both index.js and things.js should be in same directory
app.use('/api/contactGroup', contactGroup);

module.exports = app;
