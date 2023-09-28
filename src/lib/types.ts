import { routes } from './routes';

export type Routes = typeof routes;

export type ExtractRouteParams<T extends { params: any }> = {
  [K in T['params'][number]]: string;
};

export type RoutesWithParams = {
  [K in keyof Routes]: Routes[K]['params'] extends null ? never : K;
}[keyof Routes];

export type RoutesWithoutParams = {
  [K in keyof Routes]: Routes[K]['params'] extends null ? K : never;
}[keyof Routes];

export type Navigate = {
  <Route extends RoutesWithParams>(route: Route, params: ExtractRouteParams<Routes[Route]>): void;
  <Route extends RoutesWithoutParams>(route: Route): void;
};

export type GetPath = {
  <Route extends RoutesWithParams>(route: Route, params: ExtractRouteParams<Routes[Route]>): string;
  <Route extends RoutesWithoutParams>(route: Route): string;
};
