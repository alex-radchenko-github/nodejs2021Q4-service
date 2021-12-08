const app = require('fastify')({
  logger: true
});

const userRouter = require('./resources/route/userRouter.ts')
const boardRouter = require('./resources/route/boardRouter.ts')
const taskRouter = require('./resources/route/taskRouter.ts')

const routes = [userRouter, boardRouter, taskRouter]
routes.forEach(r => r.forEach((route: object) => {
  app.route(route)
}))

module.exports = app;