var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mysql = require('mysql');
  
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));
  
  
// default route
router.get('/', function (req, res) {
    return res.send({ error: true, message: 'hello' })
});
// connection configurations
var dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'contact_management'
});
  
// connect to database
dbConn.connect(); 
 
 
// Retrieve all CONTACT_GROUP 
router.get('/all', function (req, res) {
    dbConn.query('SELECT * FROM CONTACT_GROUP', function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'CONTACT_GROUP list.' });
    });
});
 
 
// Retrieve contactGroup with id 
router.get('/:id', function (req, res) {
  
    let contactGroup_id = req.params.id;
  
    if (!contactGroup_id) {
        return res.status(400).send({ error: true, message: 'Please provide contactGroup_id' });
    }
  
    dbConn.query('SELECT * FROM CONTACT_GROUP where id=?', contactGroup_id, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results[0], message: 'CONTACT_GROUP list.' });
    });
  
});
 
 
// Add a new contactGroup  
router.post('', function (req, res) {
  console.log('BODY---> ', req.body);
    let contactGroup = req.body;
  
    if (!contactGroup) {
        return res.status(400).send({ error:true, message: 'Please provide contactGroup' });
    }
  
    dbConn.query("INSERT INTO CONTACT_GROUP SET ? ", { CONTACT_ID: contactGroup.contactId, GROUP_ID: contactGroup.groupId }, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'New contactGroup has been created successfully.' });
    });
});
 
 
//  Update contactGroup with id
router.put('', function (req, res) {
  
    let contactGroup_id = req.body.contactGroup_id;
    let contactGroup = req.body.contactGroup;
  
    if (!contactGroup_id || !contactGroup) {
        return res.status(400).send({ error: contactGroup, message: 'Please provide contactGroup and contactGroup_id' });
    }
  
    dbConn.query("UPDATE CONTACT_GROUP SET CONTACT_GROUP = ? WHERE id = ?", [contactGroup, contactGroup_id], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'contactGroup has been updated successfully.' });
    });
});
 
 
//  Delete contactGroup
router.delete('', function (req, res) {
  
    let contactGroup_id = req.body.id;
  
    if (!contactGroup_id) {
        return res.status(400).send({ error: true, message: 'Please provide contactGroup_id' });
    }
    dbConn.query('DELETE FROM CONTACT_GROUP WHERE id = ?', [contactGroup_id], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'contactGroup has been updated successfully.' });
    });
}); 

router.delete('/remove', function (req, res) {
  
    let contactGroup = req.body;
  
    if (!contactGroup) {
        return res.status(400).send({ error: true, message: 'Please provide contactGroup details' });
    }
    dbConn.query('DELETE FROM CONTACT_GROUP WHERE CONTACT_ID = ? AND GROUP_ID = ?', [contactGroup.contactId, contactGroup.groupId], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'contactGroup has been updated successfully.' });
    });
}); 
 
module.exports = router;
