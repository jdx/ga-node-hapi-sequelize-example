var User = require('./models/user');
User.sync({force: true}).then(function () {
  return User.create({
    firstName: 'jeff', lastName: 'dickey'
  });
});
