export const routes = {
  about: {
    path: '/about/[username]',
    params: ['username'],
  },
  dashboard: {
    path: '/dashboard',
    params: null,
  },
  home: {
    path: '/',
    params: null,
  },
  profile: {
    path: '/profile/[userId]/[section]',
    params: ['userId', 'section'],
  },
};
