const app = require('fastify')({
  logger: true
});
// @ts-ignore

const userRoutes = require('./resources/route/userRouter.ts')
const boardRouter = require('./resources/route/boardRouter.ts')
const taskRouter = require('./resources/route/taskRouter.ts')

const routes = [userRoutes, boardRouter, taskRouter]
routes.forEach(r => r.forEach((route: any) => {
  app.route(route)
}))


module.exports = app;