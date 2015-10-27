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
		res.json({
			state:1,
			user:user
		})
	}else{
		res.json({
			state:0,
			user:null
		})
	}
});

module.exports = router;