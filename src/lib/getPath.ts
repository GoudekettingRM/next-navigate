import { routes } from './routes';
import { type ExtractRouteParams, type GetPath, type Routes } from './types';

export const getPath: GetPath = <Route extends keyof Routes>(
  route: Route,
  params?: ExtractRouteParams<Routes[Route]> | undefined,
) => {
  const routeInfo = routes[route];

  if (!routeInfo) {
    throw new Error(`Unknown route: ${route}`);
  }

  if (routeInfo.params && params === undefined) {
    throw new Error(`No params expected for route: ${route}`);
  }

  if (routeInfo.params && routeInfo.params.length > 0 && params === undefined) {
    throw new Error(`For ${route}, the following params are expected: \n ${routeInfo.params.join('\n ')}`);
  }

  if (routeInfo.params && params !== undefined) {
    for (const key of Object.keys(params)) {
      if (!routeInfo.params.includes(key)) {
        throw new Error(`Invalid param key: ${key}`);
      }
    }
  }

  let url = routeInfo.path;

  if (routeInfo.params?.length && params) {
    for (let key in params) {
      const placeholder = `[${key}]`;
      url = url.replace(placeholder, params[key as keyof typeof params]);
    }
  }

  return url;
};
