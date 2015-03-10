var Sequelize = require('sequelize');
var db = require('../db');
module.exports = db.define('user', {
  firstName: {type: Sequelize.STRING},
  lastName:  {type: Sequelize.STRING},
  birthday:  {type: Sequelize.DATE}
});
