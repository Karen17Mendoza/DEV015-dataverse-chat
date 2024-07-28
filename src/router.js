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

// Toma un objeto routes y lo asigna a la variable ROUTES
export const setRoutes = (routes) => {
  if (typeof routes !== 'object' || routes === null) {
    throw new Error('Routes should be a non-null object');
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

// Convierte una cadena de consulta (query string) en un objeto
const queryStringToObject = (queryString) => {
  const params = new URLSearchParams(queryString);
  return Object.fromEntries(params.entries());
};

// Renderiza la vista correspondiente al pathname con los props proporcionados
const renderView = (pathname, props = {}) => {
  if (!rootEl) {
    throw new Error('Root element is not set. Please call setRootEl first.');
  }
  rootEl.innerHTML = '';
  /*const view = ROUTES[pathname] || ROUTES['/error'];
  rootEl.appendChild(view(props));*/
  /*Agregamos enrutamientos dinamico apartir de aqui: */
  let view = ROUTES[pathname];

  // Handle dynamic routes
  if (!view) {
    const dynamicRoute = Object.keys(ROUTES).find(route => {
      const routeRegex = new RegExp(`^${route.replace(/:\w+/g, '(\\w+)')}$`);
      return routeRegex.test(pathname);
    });

    if (dynamicRoute) {
      const routeRegex = new RegExp(`^${dynamicRoute.replace(/:\w+/g, '(\\w+)')}$`);
      const match = pathname.match(routeRegex);
      if (match) {
        const params = match.slice(1);
        view = () => ROUTES[dynamicRoute](...params, props);
      }
    }
  }

  view = view || ROUTES['/error'];
  rootEl.appendChild(view(props));
};

// Navega a la ruta especificada y renderiza la vista correspondiente
export const navigateTo = (pathname, props = {}) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  renderView(pathname, props);
};

// Maneja los cambios en la URL y renderiza la vista correspondiente
export const onURLChange = (location) => {
  const { pathname, search } = location;
  const searchParams = queryStringToObject(search);
  renderView(pathname, searchParams);
};

// Escucha el evento 'popstate' para manejar la navegación hacia atrás y adelante
window.addEventListener('popstate', () => {
  onURLChange(window.location);
});