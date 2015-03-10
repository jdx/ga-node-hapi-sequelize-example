'use strict';
var co = require('co');
var Mongo = require('co-easymongo');
var db = new Mongo({dbname: 'social'});
var users = db.collection('users');

co(function *() {
  yield users.save({name: 'dickeyxxx'});
  console.log('user added');
  let count = yield users.count();
  console.log(`user count: ${count}`);

  let response = {
    count: users.count(),
    user: users.find({name: 'dickeyxxx'})
  };
  console.dir(yield response);

  db.close();
})
.catch(function (err) {
  throw err;
})
