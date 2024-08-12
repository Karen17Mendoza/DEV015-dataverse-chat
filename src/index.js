import { setRootEl, setRoutes, onURLChange} from './router.js';
import { Home } from './views/Home.js';
import { ChatIndividual } from './views/ChatIndividual.js';
import { apiKeyView } from './views/apiKeyView.js';
import { setApiKey, getApiKey } from './lib/apiKey.js';

// Define your routes and their associated views
const routes = {
  '/': Home,
  '/ChatIndividual/': ChatIndividual,
  '/apiKey/': apiKeyView,
  '/error': () => {
    const container = document.createElement('div');
    container.innerHTML = '<p>Error Page not found</p>';
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

});

// Establecer API Key (esto solo debe hacerse una vez)
