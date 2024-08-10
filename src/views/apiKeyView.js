export function apiKeyView() {
  const apiElement = document.createElement("div");
  apiElement.className = 'api-key-container';
  
  apiElement.innerHTML = `
      <div class="api">
        <h2 class="api__title">Api Key Admin</h2>
        <p class="api__subtitle">Desde aquí puedes administrar la API Key a utilizar</p>
        <input type="text" id="userIdInput" name="api-key" class="api__input" placeholder="API KEY" required="">        
        <button class="api__button">Guardar</button>
      </div>
    `;
  return apiElement;
}