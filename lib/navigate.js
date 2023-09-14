import { routes } from '@navigation/routes';

export function navigate(route, params) {
  const routeInfo = routes[route];
  if (!routeInfo) {
    throw new Error(`Unknown route: ${route}`);
  }

  if (routeInfo.params.length === 0 && params !== undefined) {
    throw new Error(`No params expected for route: ${route}`);
  }

  if (routeInfo.params.length > 0 && params === undefined) {
    throw new Error(`For ${route}, the following params are expected: \n ${routeInfo.params.join('\n ')}`);
  }

  if (params !== undefined) {
    for (const key of Object.keys(params)) {
      if (!routeInfo.params.includes(key)) {
        throw new Error(`Invalid param key: ${key}`);
      }
    }
  }

  return '';
}
