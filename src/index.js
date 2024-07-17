import { setRootEl, setRoutes, onURLChange, navigateTo } from './router.js';
import { Home } from './views/Home.js';
import { About } from './views/About.js';

// Define your routes and their associated views
const routes = {
  '/': Home,
  '/about': About,
  '/error': () => {
    const container = document.createElement('div');
    container.innerHTML = '<h1>Error</h1><p>Page not found</p>';
    return container;
  }
};

// Assign the routes
setRoutes(routes);

// Handle initial URL load
window.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById('root');
  setRootEl(rootElement);
  onURLChange(window.location); // Invoke the router to render the correct view on initial load

  // Attach event listener to the button
  const aboutButton = document.getElementById('about-btn');
  aboutButton.addEventListener('click', () => navigateTo('/about', { name: 'Xochitl' }));
});

// Handle URL changes
window.addEventListener('popstate', () => {
  onURLChange(window.location);
});