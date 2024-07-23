import { Home } from './views/Home.js';
import { setRootEl, setRoutes, onURLChange } from './router.js';

// Define tus rutas
const routes = {
  '/': Home,
  // Asegúrate de definir la ruta de detalles si la necesitas en el futuro
};

// Asigna las rutas
setRoutes(routes);

window.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById('root');
  setRootEl(rootElement);
  onURLChange(window.location);
});

window.addEventListener('popstate', () => {
  onURLChange(window.location);
});