import { useRouter } from 'next/navigation';
import { getPath } from './getPath';
import { isRouteWithParams } from './isRouteWithParams';
import { routes } from './routes';
import { ExtractRouteParams, Navigate, Routes } from './types';

export const useNavigation = (): {
  navigate: Navigate;
  routes: Record<TPageNames, TPageEntry>;
} => {
  const router = useRouter();

  const navigate: Navigate = <Route extends keyof Routes>(
    route: Route,
    params?: ExtractRouteParams<Routes[Route]> | undefined,
  ) => {
    if (isRouteWithParams(route) && params) {
      router.push(getPath(route, params));
    } else if (!params && !isRouteWithParams(route)) {
      router.push(getPath(route));
    }
  };

  return { navigate, routes };
};
