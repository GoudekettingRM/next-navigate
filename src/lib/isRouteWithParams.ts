import { routes } from './routes';
import { type Routes, type RoutesWithParams } from './types';

export const isRouteWithParams = (route: keyof Routes): route is RoutesWithParams => {
  return routes[route].params !== null;
};
