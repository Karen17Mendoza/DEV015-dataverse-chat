import { Home } from './views/Home.js';
import { ChatIndividual } from './views/ChatIndividual.js';
import { setRootEl, setRoutes, onURLChange } from './router.js';

// Define tus rutas
const routes = {
  "/": Home,
  "/chatIndividual/:name": ChatIndividual,
};

// llamando a la función setRoutes y pasándole el objeto routes
setRoutes(routes);

// Manejador de eventos para la carga inicial de la URL
document.addEventListener('DOMContentLoaded', () => {
  const appElement = document.getElementById('root');
  appElement.innerHTML = ''; // Limpia el contenido del contenedor 'app'
  appElement.appendChild(Home());
  /* Agregue esto*/
  setRootEl(appElement);
});

window.addEventListener("popstate", () => {
  onURLChange();
});