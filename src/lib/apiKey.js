export const getApiKey = () => {
  // Implementa el código para obtener la API KEY desde Local Storage
  localStorage.getItem("API-KEY");
};
 
export const setApiKey = (key) => {
  // Implementa el código para guardar la API KEY en Local Storage
  localStorage.setItem("API-KEY", key);
};  