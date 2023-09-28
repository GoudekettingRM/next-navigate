export const routes = {
  oneParam: {
    path: '/oneParam/[param]',
    params: ['param'],
  },
  noParam: {
    path: '/dashboard',
    params: null,
  },
  'noParam-param': {
    path: '/dashboard/[param]',
    params: ['param'],
  },
  moreThanOneParam: {
    path: '/moreThanOneParam/[param1]/[param2]',
    params: ['param1', 'param2'],
  },
  catchAllParam: {
    path: '/catchAllParam/[[...param]]',
    params: ['...param'],
  },
};
