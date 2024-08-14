export const Header = (updateView) => {
  const headerEl = document.createElement('header');
  headerEl.setAttribute('role', 'banner');
  headerEl.classList.add('header');  

  const img = document.createElement('img');
  img.src = '../images/header-image-1.png'; // Ruta relativa correcta
  img.alt = 'Logo del header';
  img.classList.add('header-logo');

  headerEl.appendChild(img);

  headerEl.innerHTML += `
    <p class="header__description">
      ¡Hola! 🌸 ¿Buscas el Kdrama perfecto para maratonear? En Kdrama Chat, explora una amplia colección filtrada por género, año y episodios. 
      Interactúa con cada Kdrama y chatea con todos los Kdramas. 
      ¡Recomendaciones personalizadas para todos los gustos! ¡Descubre tu próximo Kdrama favorito con nosotros!
    </p>
    <div class="button-row">
      <!--Botón 1: Limpiar contenedor-->
      <button class="button-clear" data-testid="button-clear">Limpiar</button>
      <!--Botón 2: Métricas Ranking-->
      <button class="metrics">Ranking 3ro°</button>
      <!--Botón 3: Calcular promedio de capítulos-->
      <button class="button-average" id="button-calculate" data-testid="button-calculate">Curiosidades</button>
    </div>
    <div class="block-average">
      <div id="average-container" class="average-container"></div>
      <div id="average-container1" class="average-container"></div>
      <div id="average-container2" class="average-container"></div>
    </div>
  `;

  // Agregar eventos para los botones
  headerEl.querySelector('.button-clear').addEventListener('click', () => {
    updateView({ filterBy: 'all', value: 'all', orderBy: 'all' });
    document.getElementById('order-select').value = 'all';
    document.getElementById('average-container').classList.remove('show');
    document.getElementById('average-container1').classList.remove('show1');
    document.getElementById('average-container2').classList.remove('show2');
  });

  headerEl.querySelector('.button-average').addEventListener('click', () => {
    updateView({ showAverage: true });
  });

  headerEl.querySelector('.metrics').addEventListener('click', () => {
    updateView({ showMetrics: true });
  });

  return headerEl;
};