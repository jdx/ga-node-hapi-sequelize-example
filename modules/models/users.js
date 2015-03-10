var users = ['dickeyxxx', 'user2'];
module.exports.list = function () {
  return users;
};

module.exports.list.all = function () {
  return users + ['foo'];
};

module.exports.list()
module.exports.list.all()
