import { useRouter } from 'next/navigation';
import { routes } from './routes';

type Routes = typeof routes;

// type ExtractRouteParams<T> = T extends { params: infer P }
//   ? P extends null
//     ? never
//     : { [K in Extract<P extends string[] ? P[number] : string, string>]: string }
//   : never;

// type RoutesWithParams = {
//   [K in keyof Routes]: Routes[K]['params'] extends null ? never : K;
// }[keyof Routes];

// type RoutesWithoutParams = {
//   [K in keyof Routes]: Routes[K]['params'] extends null ? K : never;
// }[keyof Routes];

// type Navigate = {
//   <Route extends RoutesWithParams>(route: Route, params: ExtractRouteParams<Routes[Route]>): void;
//   <Route extends RoutesWithoutParams>(route: Route): void;
// };

type ExtractRouteParams<T extends { params: any }> = {
  [K in T['params'][number]]: string;
};

type RoutesWithParams = {
  [K in keyof Routes]: Routes[K]['params'] extends null ? never : K;
}[keyof Routes];

type RoutesWithoutParams = {
  [K in keyof Routes]: Routes[K]['params'] extends null ? K : never;
}[keyof Routes];

type Navigate = {
  <Route extends RoutesWithParams>(route: Route, params: ExtractRouteParams<Routes[Route]>): void;
  <Route extends RoutesWithoutParams>(route: Route): void;
};

export const useNavigation = (): {
  navigate: Navigate;
  routes: Record<TPageNames, TPageEntry>;
} => {
  const router = useRouter();

  const navigate: Navigate = <Route extends keyof Routes>(
    route: Route,
    params?: ExtractRouteParams<Routes[Route]> | undefined,
  ) => {
    const routeInfo = routes[route];

    if (!routeInfo) {
      throw new Error(`Unknown route: ${route}`);
    }

    if (routeInfo.params && params !== undefined) {
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
        // Replace the placeholder in the path with the value from params
        const placeholder = `[${key}]`;
        url = url.replace(placeholder, params[key as keyof typeof params]);
      }
    }

    console.log('url', url);
    router.push(url);
    // router.push(routes[route].path, params);
  };

  return { navigate, routes };
};
