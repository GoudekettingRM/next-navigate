declare global {
  export type TPageEntry = {
    path: string;
    params: string[] | null;
  };

  export type TPageNames = 'oneParam' | 'noParam' | 'noParam-param' | 'moreThanOneParam' | 'catchAllParam';
}

export {};
