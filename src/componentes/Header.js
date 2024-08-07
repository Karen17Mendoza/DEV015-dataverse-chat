export const Header = () => {
  const headerEl = document.createElement('header');
  headerEl.setAttribute('role', 'banner');
  headerEl.classList.add('header');



  headerEl.innerHTML = `
  <h1>Kdrama Chat</h1>
      <p class="header__description">
        ¡Hola! 🌸 ¿Buscas el Kdrama perfecto para maratonear? En Kdrama Chat, explora una amplia colección filtrada por género, año y episodios. 
        Interactúa con cada Kdrama y chatea con todos los Kdramas. 
        ¡Recomendaciones personalizadas para todos los gustos! ¡Descubre tu próximo Kdrama favorito con nosotros!
      </p>
      
  `;

  

  return headerEl;
};