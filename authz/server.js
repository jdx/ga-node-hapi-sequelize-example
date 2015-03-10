var Hapi = require('hapi');
var server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: 3000
});

server.register(require('hapi-auth-jwt'), function (err) {
  if (err) { throw err; }

  server.auth.strategy('token', 'jwt', {
    key: 'shh',
    validateFunc: function (decodedToken, callback) {
      callback(null, true, decodedToken);
    }
  });

  server.route({
    method: 'GET',
    path: '/login',
    handler: function (request, reply) {
      reply({token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjEwMCwiaWF0IjoxNDI1OTQ0ODEwfQ.uQUzFHgni7krb6_6v_ln5q1-GQgGzQxvz4KCd5z0w-I'});
    }
  });

  server.route({
    method: 'GET',
    path: '/profile',
    config: {
      auth: { strategy: 'token' }
    },
    handler: function (request, reply) {
      reply('yay');
    }
  });


  server.start(function () {
    console.log(`server is running at ${server.info.uri}`);
  });
});
