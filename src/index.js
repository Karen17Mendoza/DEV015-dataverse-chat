import { Home } from './views/Home.js';
import { setRootEl, setRoutes, onURLChange } from './router.js';

// Define tus rutas
const routes = {
  "/": Home,
};

// llamando a la función setRoutes y pasándole el objeto routes
setRoutes(routes);

// Manejador de eventos para la carga inicial de la URL
window.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById('root');
  setRootEl(rootElement);
  onURLChange(window.location); // Invocar el enrutador para mostrar la vista correcta en la carga inicial
});

window.addEventListener("popstate", () => {
  onURLChange();
});