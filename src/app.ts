const app = require('fastify')({
  logger: [{
    level: 'error',
    file: './logs/error.log'
  }, {
    level: 'info',
    file: './logs/info.log'
  }],


});

const userRouter = require('./resources/route/userRouter')
const boardRouter = require('./resources/route/boardRouter')
const taskRouter = require('./resources/route/taskRouter')

const routes = [userRouter, boardRouter, taskRouter]

app.log.error('Example error log');

routes.forEach(r => r.forEach((route: object) => {
  app.route(route)
}))



module.exports = app;