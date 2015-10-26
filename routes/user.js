var express = require('express');
var router = express.Router();
var _ = require('underscore');

var userlist = require('../data/user.json');

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.json({
		'data': userlist.users
	});
});

module.exports = router;