declare global {
  export type TPageEntry = {
    path: string;
    params: string[] | null;
  };

  export type TPageNames = 'home' | 'about' | 'profile' | 'dashboard';
}

export {};
