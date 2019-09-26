var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mysql = require('mysql');
  
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));
  
  
// connection configurations
var dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'contact_management'
});
  
// connect to database
dbConn.connect(); 
 
 
// Retrieve all CONTACTS 
router.get('/all', function (req, res) {
    dbConn.query('SELECT * FROM CONTACTS', function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'CONTACTS list.' });
    });
});
 
 
// Retrieve contact with id 
router.get('/:id', function (req, res) {
  
    let contact_id = req.params.id;
  
    if (!contact_id) {
        return res.status(400).send({ error: true, message: 'Please provide contact_id' });
    }
  
    dbConn.query('SELECT * FROM CONTACTS where id=?', contact_id, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results[0], message: 'CONTACTS list.' });
    });
  
});
 
 
// Add a new contact  
router.post('', function (req, res) {
  console.log('BODY---> ', req.body);
    let contact = req.body;
  
    if (!contact) {
        return res.status(400).send({ error:true, message: 'Please provide contact' });
    }
  
    dbConn.query("INSERT INTO CONTACTS SET ? ", { NAME: contact.name, NUMBER: contact.number }, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'New contact has been created successfully.' });
    });
});
 
 
//  Update contact with id
router.put('', function (req, res) {
  
    let contact_id = req.body.contact_id;
    let contact = req.body.contact;
  
    if (!contact_id || !contact) {
        return res.status(400).send({ error: contact, message: 'Please provide contact and contact_id' });
    }
  
    dbConn.query("UPDATE CONTACTS SET contact = ? WHERE id = ?", [contact, contact_id], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'contact has been updated successfully.' });
    });
});
 
 
//  Delete contact
router.delete('', function (req, res) {
  
    let contact_id = req.body.id;
  
    if (!contact_id) {
        return res.status(400).send({ error: true, message: 'Please provide contact_id' });
    }
    dbConn.query('DELETE FROM CONTACTS WHERE id = ?', [contact_id], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'contact has been updated successfully.' });
    });
}); 
 
module.exports = router;
