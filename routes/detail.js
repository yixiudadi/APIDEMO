var express = require('express');
var router = express.Router();
var _ = require('underscore');

var detail_data = require('../data/detail.json');

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.json({
		'data': detail_data
	});
});

module.exports = router;