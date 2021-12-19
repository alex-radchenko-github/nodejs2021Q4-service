const app = require('fastify')({
  logger: true
});

const userRouter = require('./resources/route/userRouter')
const boardRouter = require('./resources/route/boardRouter')
const taskRouter = require('./resources/route/taskRouter')

const routes = [userRouter, boardRouter, taskRouter]


routes.forEach(r => r.forEach((route: object) => {
  app.route(route)
}))

module.exports = app;