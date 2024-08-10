import { createSidebarnav } from '../componentes/nav.js';

export function apiKeyView() {
  const container = document.createElement('div');
  container.className = 'api-key-view-container';

  // Crear y añadir la barra lateral
  const sidebarNav = createSidebarnav();
  container.appendChild(sidebarNav);

  // Crear el contenedor de la API key
  const apiContainer = document.createElement('div');
  apiContainer.className = 'api-key-container';
  
  apiContainer.innerHTML = `
      <h1>Enter your User ID</h1>
      <input type="text" id="userIdInput" placeholder="Enter your user ID">
      <button id="submitButton">Submit</button>
    `;

  // Añadir el contenedor de la API key al contenedor principal
  container.appendChild(apiContainer);
  
  return container;
}