import { Home } from './views/Home.js';
import { ChatIndividual } from './views/ChatIndividual.js';
import { setRootEl, setRoutes, navigateTo } from './router.js';

// Define tus rutas
const routes = {
  '/': Home,
  '/chat/:id': ChatIndividual,
};

// Configura el elemento raíz
const rootElement = document.getElementById('root');
setRootEl(rootElement);

// Configura las rutas
setRoutes(routes);

// Manejador de eventos para la carga inicial de la URL
document.addEventListener('DOMContentLoaded', () => {
  navigateTo(window.location.pathname);
});

// Manejador de eventos para cambios de URL (historial)
window.addEventListener('popstate', () => {
  navigateTo(window.location.pathname);
});