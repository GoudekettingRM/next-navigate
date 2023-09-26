declare global {
  export const routes: Record<TPageNames, TPageEntry>;

  export type TPageEntry = {
    path: string;
    params: string[];
  };

  export type ParamObject<Params extends string[]> = {
    [key in Params[number]]: string;
  };

  export type ParamsAreEmpty<Params extends string[]> = Params extends [] ? true : false;

  export type TPageNames = 'home';
}

export {};
