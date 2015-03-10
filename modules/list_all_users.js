var chalk = require('chalk')
var models = require('./models')

console.log(chalk.underline.bgBlue(`listing all ${models.users} users...`))
models.users.forEach(function (user) {
  console.log(user)
})
