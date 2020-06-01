const Sequelize = require('sequelize');

var sequelize = require('./../db');

var User = sequelize.db.define('users', {
	user_id 		  : Sequelize.STRING,
	first_name		  : Sequelize.STRING,
	last_name		  : Sequelize.STRING,
	password 		  : Sequelize.STRING,
	mail_id			  : {type : Sequelize.STRING,unique:true},
	phone_number	  : {type : Sequelize.STRING,unique:true}

});

sequelize.db.sync().then(function() {
})

module.exports = User;