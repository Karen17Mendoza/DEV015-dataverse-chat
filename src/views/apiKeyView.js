export function apiKeyView() {
  const container = document.createElement('div');
  container.className = 'api-key-container';
    
  container.innerHTML = `
      <h1>Enter your User ID</h1>
      <input type="text" id="userIdInput" placeholder="Enter your user ID">
      <button id="submitButton">Submit</button>
    `;
  
  
  return container;
}