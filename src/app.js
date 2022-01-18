const app = require('fastify')({
  logger: true
});

const userRoutes = require('./resources/route/userRouter.js')
const boardRouter = require('./resources/route/boardRouter.js')
const taskRouter = require('./resources/route/taskRouter.js')

const routes = [userRoutes, boardRouter, taskRouter]
routes.forEach(r => r.forEach((route) => {
  app.route(route)
}))


module.exports = app;