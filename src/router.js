let ROUTES = {};
let rootEl;

export const setRootEl = (el) => {
  rootEl = el;
};

export const setRoutes = (routes) => {
  if (typeof routes !== 'object') {
    throw new Error('Routes should be an object');
  }
  if (!routes['/error']) {
    routes['/error'] = () => {
      const view = document.createElement('div');
      view.textContent = 'Error: Page not found';
      return view;
    };
  }
  ROUTES = routes;
};

const renderView = (pathname, props = {}) => {
  rootEl.innerHTML = '';
  const route = Object.keys(ROUTES).find(route => new RegExp(`^${route.replace(/:\w+/g, '\\w+')}$`).test(pathname));
  const view = ROUTES[route] || ROUTES['/error'];
  rootEl.appendChild(view(props));
};

export const navigateTo = (pathname, props = {}) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  renderView(pathname, props);
};

export const onURLChange = (location) => {
  const pathname = location.pathname;
  renderView(pathname);
};

window.addEventListener('popstate', () => {
  onURLChange(window.location);
});