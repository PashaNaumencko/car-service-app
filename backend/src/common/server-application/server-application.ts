import { config } from '~/common/config/config.js';
import { logger } from '~/common/logger/logger.js';

import { ServerApp } from './server-app.js';
import { ServerAppApi } from './server-app-api.js';

const apiV1 = new ServerAppApi('v1', config);
const serverApp = new ServerApp({
  config,
  logger,
  apis: [apiV1],
});

export { serverApp };
export { type ServerAppRouteParameters } from './types/types.js';
