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
 
 
// Retrieve all GROUPS 
router.get('/all', function (req, res) {
    dbConn.query('SELECT * FROM GROUPS', function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'GROUPS list.' });
    });
});
 
 
// Retrieve group with id 
router.get('/:id', function (req, res) {
  
    let group_id = req.params.id;
  
    if (!group_id) {
        return res.status(400).send({ error: true, message: 'Please provide group_id' });
    }
  
    dbConn.query('SELECT * FROM GROUPS where id=?', group_id, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results[0], message: 'GROUPS list.' });
    });
  
});
 
 
// Add a new group  
router.post('', function (req, res) {
  console.log('BODY---> ', req.body);
    let group = req.body;
  
    if (!group) {
        return res.status(400).send({ error:true, message: 'Please provide group' });
    }
  
    dbConn.query("INSERT INTO GROUPS SET ? ", { NAME: group.name }, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'New group has been created successfully.' });
    });
});
 
 
//  Update group with id
router.put('', function (req, res) {
  
    let group_id = req.body.group_id;
    let group = req.body.group;
  
    if (!group_id || !group) {
        return res.status(400).send({ error: group, message: 'Please provide group and group_id' });
    }
  
    dbConn.query("UPDATE GROUPS SET GROUPS = ? WHERE id = ?", [group, group_id], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'group has been updated successfully.' });
    });
});
 
 
//  Delete group
router.delete('', function (req, res) {
  
    let group_id = req.body.id;
  
    if (!group_id) {
        return res.status(400).send({ error: true, message: 'Please provide group_id' });
    }
    dbConn.query('DELETE FROM GROUPS WHERE id = ?', [group_id], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'group has been updated successfully.' });
    });
}); 
 
module.exports = router;
