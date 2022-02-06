import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
class LogsMiddleware implements NestMiddleware {
  private readonly logger = new Logger('HTTP');

  use(request: Request, response: Response, next: NextFunction) {
    response.on('finish', () => {
      const { method, originalUrl } = request;
      const { statusCode, statusMessage } = response;

      let body = '';
      if (Object.keys(request.body).length > 0) {
        body = `\nbody: ${JSON.stringify(request.body)}`;
      }

      let query = '';
      if (Object.keys(request.query).length > 0) {
        query = `\nquery: ${JSON.stringify(request.query)}`;
      }

      const message = `
method: ${method} 
originalUrl: ${originalUrl}
statusCode: ${statusCode} 
statusMessage: ${statusMessage} ${body} ${query}
`;

      if (statusCode >= 500) {
        return this.logger.error(message);
      }

      if (statusCode >= 400) {
        return this.logger.warn(message);
      }

      return this.logger.log(message);
    });

    next();
  }
}

export default LogsMiddleware;
