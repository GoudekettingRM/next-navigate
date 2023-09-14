// Type definitions for [next-navigate]
// Project: [next-navigate]
// Definitions by: [Robin Goudeketting] <[https://github.com/GoudekettingRM]>

declare global {
  declare namespace NextNavigate {
    export type TPageEntry = {
      path: string;
      params: string[];
    };

    export type ParamObject<Params extends string[]> = {
      [key in Params[number]]: string;
    };

    export type ParamsAreEmpty<Params extends string[]> = Params extends [] ? true : false;

    export function navigate<Route extends TPageNames>(route: Route): string;
    export function navigate<Route extends TPageNames>(
      route: Route,
      params: ParamsAreEmpty<(typeof routes)[Route]['params']> extends true
        ? never
        : ParamObject<(typeof routes)[Route]['params']>,
    ): string;
  }
}
