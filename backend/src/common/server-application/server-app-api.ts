import { type IConfig } from '~/common/config/config.js';
import { AppEnvironment } from '~/common/enums/enums.js';

import { type IServerAppApi } from './interfaces/interfaces.js';
import { type ServerAppRouteParameters } from './types/types.js';

class ServerAppApi implements IServerAppApi {
  public version: string;

  public routes: ServerAppRouteParameters[];

  private config: IConfig;

  public constructor(
    version: string,
    config: IConfig,
    ...handlers: ServerAppRouteParameters[]
  ) {
    this.version = version;
    this.config = config;
    this.routes = handlers.map((it) => ({
      ...it,
      path: `/api/${this.version}${it.path}`,
    }));
  }
}

export { ServerAppApi };
