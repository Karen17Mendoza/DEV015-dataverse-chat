export const Header = () => {
  const headerEl = document.createElement('header');
  headerEl.setAttribute('role', 'banner');
  headerEl.classList.add('header');



  headerEl.innerHTML = `
  <button class="material-icons header__button">menu</button>
  <h1>Kdrama Chat</h1>
      <p class="header__description">
        ¡Hola! ¿Estás buscando el Kdrama perfecto para maratonear este fin de semana? 
        
      </p>
    
      
  `;

  

  return headerEl;
};