const API_KEY_STORAGE_KEY = 'api-key'; // Clave para almacenar la API Key

export const getApiKey = () => {
  // Obtener la API KEY desde Local Storage
  return localStorage.getItem(API_KEY_STORAGE_KEY);
};

export const setApiKey = (key) => {
  // Guardar la API KEY en Local Storage
  localStorage.setItem(API_KEY_STORAGE_KEY, key);
};