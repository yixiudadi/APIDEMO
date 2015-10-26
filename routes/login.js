var express = require('express');
var router = express.Router();
var _ = require('underscore');

var userlist = require('../data/user.json');

/* GET users listing. */
router.post('/', function(req, res, next) {
	var user = _.filter(userlist.users, function(user){ 
		return (user.username == req.body.username && user.password == req.body.password)
	})
	if(user.length>0){
		res.send('1')
	}else{
		res.send('0')
	}
});

module.exports = router;