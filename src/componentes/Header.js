export const Header = () => {
    const headerEl = document.createElement('header');
    headerEl.setAttribute('role', 'banner');
    headerEl.innerHTML = `
      <h1>Kdrama Database</h1>
      <p class="header__description">
        ¡Hola! ¿Estás buscando el Kdrama perfecto para maratonear este fin de
        semana? ¡No busques más! En Kdrama Database, te ofrecemos una vasta
        colección de Kdramas que podrás filtrar fácilmente por género, año de
        lanzamiento, y número de episodios. Sumérgete en emocionantes historias
        de romance, drama, comedia, fantasía, ciencia ficción y más. Ya seas un
        veterano en el mundo de los Kdramas o un recién llegado, aquí
        encontrarás recomendaciones adaptadas a tus gustos. ¡Explora y descubre
        tu próximo Kdrama favorito con nosotros!
      </p>
    `;
    return headerEl;
  };