import { Home } from './views/Home.js';
import { setRootEl, setRoutes, onURLChange } from './router.js';

// Define tus rutas
const routes = {
  "/": Home,
};

// llamando a la función setRoutes y pasándole el objeto routes
setRoutes(routes);

// Manejador de eventos para la carga inicial de la URL
document.addEventListener('DOMContentLoaded', () => {
  const appElement = document.getElementById('root');
  appElement.innerHTML = ''; // Limpia el contenido del contenedor 'app'
  appElement.appendChild(Home());
});

window.addEventListener("popstate", () => {
  onURLChange();
});