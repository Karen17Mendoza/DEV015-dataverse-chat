import { createSidebar } from './nav.js';

export const Header = () => {
  const headerEl = document.createElement('header');
  headerEl.setAttribute('role', 'banner');
  headerEl.classList.add('header');

  const sidebar = createSidebar();
  headerEl.appendChild(sidebar);

  headerEl.innerHTML = `
  <h1>Kdrama Chat</h1>
      <p class="header__description">
        ¡Hola! ¿Estás buscando el Kdrama perfecto para maratonear este fin de semana? 
        ¡No busques más! En Kdrama Chat, te ofrecemos una amplia colección de Kdramas 
        que podrás filtrar fácilmente por género, año de lanzamiento, y número de episodios. 
        Aquí, además de explorar podrás interactuar directamente con cada Kdrama a través de nuestro 
        Chat. Sumérgete en conversaciones individuales o únete a un chat general con 
        los demas Kdramas. Ya seas un veterano en el mundo de los Kdramas o un recién llegado, aquí 
        encontrarás recomendaciones adaptadas a tus gustos. ¡Explora, chatea y descubre tu próximo Kdrama favorito con nosotros!
      </p>
    
      
  `;

  

  return headerEl;
};