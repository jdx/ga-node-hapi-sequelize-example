var Mongo = require('easymongo');
var db = new Mongo({dbname: 'social'});
var users = db.collection('users');

users.save({name: 'dickeyxxx'}, function (err, user) {
  if (err) { throw err; }
  console.log('user added');

  users.count(function (err, count) {
    if (err) { throw err; }
    console.log(`user count: ${count}`);

    db.close();
  });
});

console.log('user NOT added');
