import { type ServerAppRouteParameters } from '../types/types.js';

interface IServerAppApi {
  version: string;
  routes: ServerAppRouteParameters[];
}

export { type IServerAppApi };
