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
  const queryParams = {};
  for (const [key, value] of params.entries()) {
    queryParams[key] = value;
  }
  return queryParams;
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

export const navigateTo = (pathname, queryParams = {}) => {
  const queryString = new URLSearchParams(queryParams).toString();
  const newUrl = queryString ? `${pathname}?${queryString}` : pathname;

  // Actualiza la URL y agrega un nuevo estado al historial
  window.history.pushState({}, '', newUrl);
  
  // Renderiza la vista correspondiente
  renderView(pathname, queryStringToObject(window.location.search));
};

export const onURLChange = (location) => {
  const { pathname, search } = location;
  const searchParams = queryStringToObject(search);
  renderView(pathname, searchParams);
};
window.addEventListener('popstate', () => {
  const { pathname, search } = window.location;
  const queryParams = queryStringToObject(search);
  renderView(pathname, queryParams);
});
