var Mongo = require('easymongo');
var db = new Mongo({dbname: 'social'});
var users = db.collection('users');
var Q = require('q');

function fetchUserCount() {
  return Q.ninvoke(users, 'count');
}

Q.ninvoke(users, 'save', {name: 'dickeyxxx'})
.then(function (user) {
  console.log('user added');

  return fetchUserCount();
})
.then(function (count) {
  console.log(`user count: ${count}`);
})
.catch(function (err) {
  throw err;
})
.finally(function () {
  db.close();
});

console.log('user NOT added');
