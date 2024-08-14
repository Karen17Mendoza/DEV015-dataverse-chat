import { setRootEl, setRoutes, onURLChange} from './router.js';
import { Home } from './views/Home.js';
import { ChatIndividual } from './views/ChatIndividual.js';
import { apiKeyView } from './views/apiKeyView.js';
import { ChatGrupal } from './views/ChatGrupal.js';
import { Contact } from './views/Contact.js';

// Define your routes and their associated views
const routes = {
  '/': Home,
  '/ChatIndividual/': ChatIndividual,
  '/apiKey/': apiKeyView,
  '/chatGrupal/': ChatGrupal,
  '/Contact/': Contact,
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
