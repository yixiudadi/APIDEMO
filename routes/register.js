var express = require('express');
var router = express.Router();
var _ = require('underscore');

var userlist = require('../data/user.json');

/* GET users listing. */
router.post('/', function(req, res, next) {
	userlist.users.push({
		'username' : req.body.username,
		'password' : req.body.password
	});
	console.log(req.body.password)
	res.json(userlist.users)
});

module.exports = router;