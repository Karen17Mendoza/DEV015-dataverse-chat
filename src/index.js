import { setRootEl, setRoutes, onURLChange, navigateTo } from './router.js';
import { Home } from './views/Home.js';
import { About } from './views/About.js';

// Definición de rutas
const routes = {
  '/': Home,
  '/about': About,
  '/error': () => {
    const container = document.createElement('div');
    container.innerHTML = '<h1>Error</h1><p>Page not found</p>';
    return container;
  }
};

// llamando a la función setRoutes y pasándole el objeto routes
setRoutes(routes);

// Manejador de eventos para la carga inicial de la URL
window.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById('root');
  setRootEl(rootElement);
  onURLChange(window.location); // Invocar el enrutador para mostrar la vista correcta en la carga inicial

  // Adjuntar detector de eventos al botón
  const aboutButton = document.getElementById('about-btn');
  aboutButton.addEventListener('click', () => navigateTo('/about', { name: 'Xochitl' }));
});

// Manejador de eventos para cambios de URL (historial)
window.addEventListener('popstate', () => {
  onURLChange(window.location);
});