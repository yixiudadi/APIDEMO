var express = require('express');
var router = express.Router();
var _ = require('underscore');

var hotel_data = require('../data/hotel_data.json');

/* GET users listing. */
router.get('/', function(req, res, next) {
	var page = req.query.page ? req.query.page : 1
	res.json({
		'data': hotel_data.Values.slice(20 * (page - 1), 20 * page)
	});
});

module.exports = router;