const { PORT } = require('./common/config.ts');

const application = require('./app.ts');


application.listen(PORT, '0.0.0.0',() =>
    application.log.info(`App is running on http://localhost:${PORT}`)
);