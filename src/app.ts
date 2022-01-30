const fs = require("fs");

const app = require('fastify')({
    logger: {
        // level: lv.logLevels[process.env.LOG_LEVEL],
        level: 'info',
        file: `./logs/common.log`
    }
});


const userRouter = require('./resources/route/userRouter')
const boardRouter = require('./resources/route/boardRouter')
const taskRouter = require('./resources/route/taskRouter')

const routes = [userRouter, boardRouter, taskRouter]

app.addHook('preHandler', (req: { body: object; log: { info: (arg0: { body: object; }, arg1: string) => void; }; }, reply: object, done: () => void) => {
    if (req.body) {
        req.log.info({body: req.body}, 'parsed body')
    }
    done()
})

app.addHook('preHandler', (req: { log: { info: (arg0: { query: string; }, arg1: string) => void; }; query: string; }, reply: object, done: () => void) => {
    if (Object.keys(req.query).length) {
        req.log.info({query: req.query}, 'parsed query')
    }
    done()
})


const outputFilePath = './logs/only_error.log'
const errorStream = fs.createWriteStream(outputFilePath, {flags: 'a'})


app.addHook('onError', (request: object, reply: { raw: { statusCode: string; }; }, error: object, done: () => void) => {
    errorStream.write(`${Date().toString()}, ${error.toString()}, status code: ${reply.raw.statusCode}\n`);
    done()
})


// // Example for trace log
// app.log.trace('Example for trace log');
//
// // Example for debug log
// app.log.debug('Example for debug log');
//
// // Example for info log
// app.log.info('Example for info log');
//
// // Example for warn log
// app.log.warn('Example for warn log');
//
// // Example for error log
// app.log.error('Example for error log');
//
// // Example for fatal log
// app.log.fatal('Example for fatal log');

process.on('uncaughtException', (e) => {
    app.log.fatal(`${e.message}`)
    errorStream.write(`${Date().toString()}, msg: ${e.message}\n`);

});

// Раскомментировать для uncaughtException
// throw Error('Oops!');

process.on('unhandledRejection', (e) => {
    app.log.fatal(`${e}`)
    errorStream.write(`${Date().toString()}, msg: ${e}\n`);
});


// Раскомментировать для unhandledRejection
// Promise.reject(Error('Oops!'));

routes.forEach(r => r.forEach((route: object) => {
    app.route(route)
}))

module.exports = app;