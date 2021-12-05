const app = require('fastify')({
  logger: true
});


const userRoutes = require('./resources/route/userRouter.js')

userRoutes.forEach((route) => {
  app.route(route)
})

module.exports = app;