let ROUTES = {};
let rootEl;

export const setRootEl = (el) => {
  rootEl = el;
};

export const setRoutes = (routes) => {
  if (typeof routes !== 'object') {
    throw new Error('Routes must be an object');
  }
  if (!routes['/error']) {
    throw new Error('Routes must define an /error route');
  }
  ROUTES = routes;
};

const queryStringToObject = (queryString) => {
  const params = new URLSearchParams(queryString);
  return Object.fromEntries(params.entries());
};

const renderView = (pathname, props = {}) => {
  if (!rootEl) {
    throw new Error('Root element is not set. Please call setRootEl first.');
  }
  rootEl.innerHTML = '';
  
  // Asegúrate de que los parámetros se pasen correctamente
  const view = ROUTES[pathname] || ROUTES['/error'];
  rootEl.appendChild(view(props));
};

export const navigateTo = (pathname, props = {}) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  renderView(pathname, props);
};

export const onURLChange = (location) => {
  const { pathname, search } = location;
  const searchParams = queryStringToObject(search);
  renderView(pathname, searchParams);
};
