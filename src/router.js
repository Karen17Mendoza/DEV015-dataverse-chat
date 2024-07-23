//objeto vacío que almacenará las rutas de la aplicación y 
//sus vistas asociadas
let ROUTES = {};
//variable que almacenará el elemento raíz 
//donde se renderizarán las vistas.
let rootEl;

// Esta función exportada toma un elemento el y 
//lo asigna a la variable rootEl. 
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
//toma una cadena de consulta (query string) y la convierte en un objeto.
const queryStringToObject = (queryString) => {
  const params = new URLSearchParams(queryString);
  return Object.fromEntries(params.entries());
};

const renderView = (pathname, props = {}) => {
  if (!rootEl) {
    throw new Error('Root element is not set. Please call setRootEl first.');
  }
  rootEl.innerHTML = '';
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

window.addEventListener('popstate', () => {
  onURLChange(window.location);
});