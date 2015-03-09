var Hapi = require('hapi');
var server = new Hapi.Server();
var User = require('./user');

server.connection({
  host: 'localhost',
  port: 3000
});

server.route({
  method: 'GET',
  path: '/hello',
  handler: function (request, reply) {
    reply({foo: 'hello, world!'});
  }
});

server.route({
  method: 'GET',
  path: '/hello/{name}',
  handler: function (request, reply) {
    User.find({where: {username: request.params.name}})
    .then(function (user) {
      reply({user: user});
    });
  }
});

server.start(function () {
  console.log('server running at', server.info.uri);
});
