const app = require('fastify')({
  logger: true
});

const userRoutes = require('./resources/route/userRouter.js')
const boardRouter = require('./resources/route/boardRouter.js')
const taskRouter = require('./resources/route/taskRouter.js')


userRoutes.forEach((route) => {
  app.route(route)
})

boardRouter.forEach((route) => {
  app.route(route)
})

taskRouter.forEach((route) => {
  app.route(route)
})

module.exports = app;