export const getApiKey = () => {
  // Obtener la API KEY desde Local Storage
  return localStorage.getItem('apiKey');
};
  
export const setApiKey = (key) => {
  // Guardar la API KEY en Local Storage
  localStorage.setItem('apiKey', key);
};