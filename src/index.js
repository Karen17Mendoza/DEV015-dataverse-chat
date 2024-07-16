// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.
import Home from './views/Home.js';
import About from './views/About.js';
import { setRootEl, setRoutes, onURLChange } from './router.js';
//Ejemplo de definición de rutas:
//1.- Definir rutas en router.
const routes = {
    "/": Home,
    "/about": About,
    '/error': () => {
        const container = document.createElement('div');
        container.innerHTML = '<h1>Error</h1><p>Page not found</p>';
        return container;
    }
    
};
//2.- Pasar "root element" a router.
// Asignar las rutas
setRoutes(routes);
// Configurar el elemento raíz donde se representarán las vistas
window.addEventListener("DOMContentLoaded", () => {
    //Asegúrate de que tu elemento raíz tenga id "app"
    const rootElement = document.getElementById('root');
    setRootEl(rootElement);
    //3.- Invocar el router para renderizar la vista correcta.
    onURLChange(window.location);

});
// Manejar cambios de URL
window.addEventListener('popstate', (event) => {
    onURLChange(window.location);
  });