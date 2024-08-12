import { createSidebarnav } from '../componentes/nav.js';
import { setApiKey } from '../lib/apiKey.js';  // Importa la función para guardar la API key

export function apiKeyView() {
  const container = document.createElement('div');
  container.className = 'api-key-view-container';

  // Crear y añadir la barra lateral
  const sidebarNav = createSidebarnav();
  container.appendChild(sidebarNav);

  // Crear el contenedor de la API key
  const apiElement = document.createElement('div');
  apiElement.className = 'api-key-container';
  
  apiElement.innerHTML = `
      <div class="api">
        <h2 class="api__title">Api Key Admin</h2>
        <p class="api__subtitle">Desde aquí puedes administrar la API Key a utilizar</p>
        <input type="text" id="userIdInput" name="api-key" class="api__input" placeholder="API KEY" required="">        
        <button class="api__button">Guardar</button>
      </div>
    `;

  // Añadir el contenedor de la API key al contenedor principal
  container.appendChild(apiElement);

  // Aquí agregamos la funcionalidad para guardar la API key
  const saveButton = container.querySelector('.api__button');
  saveButton.addEventListener('click', () => {
    const apiKeyInput = container.querySelector('#userIdInput');
    const apiKeyValue = apiKeyInput.value;
    
    if (apiKeyValue) {
      setApiKey(apiKeyValue);
      alert('API Key guardada correctamente.');
      // Resetea el botón de guardar y vacía el input
      saveButton.textContent = 'Guardar';
      apiKeyInput.value = ''; // Vacía el input
    } else {
      alert('Por favor, ingrese una API Key.');
    }
  });

  return container;
}