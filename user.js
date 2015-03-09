var Sequelize = require('sequelize');
var db = require('./db');
var User = db.define('user', {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE
});

User.sync().then(function () {
  return User.create({
    username: 'dickeyxxx',
    birthday: '1986-08-06'
  });
});

module.exports = User;
