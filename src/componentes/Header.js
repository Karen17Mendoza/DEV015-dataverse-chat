export const Header = (updateView) => {
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
    
      <!--Nav-->
      <nav class="filter-container" id="filter-container" role="navigation">
        <div class="filter-row">
          <!--Sección 1: Filtra por género-->
          <div class="filter-container__gender">
            <label for="filter-gender">Filtrar por género:</label>
            <select id="filter-gender" data-testid="select-filter" name="gender">
              <option value="all">Todos</option>
              <option value="Comedia Romántica">Comedia Romántica</option>
              <option value="Drama">Drama</option>
              <option value="Romance">Romance</option>
              <option value="Fantasía">Fantasía</option>
              <option value="Ciencia ficción">Ciencia ficción</option>
              <option value="Acción">Acción</option>
              <option value="Thriller">Thriller</option>
              <option value="Crimen">Crimen</option>
              <option value="Histórico">Histórico</option>
              <option value="Familiar">Familiar</option>
            </select>
          </div>

          <!--Sección 2: Selección de año-->
          <div class="filter-container__year">
            <label for="filter-year">Seleccionar por Año:</label>
            <select name="year" id="filter-year" data-testid="select-filter-2">
              <option value="all">Todos</option>
              <option value="2007">2007</option>
              <option value="2009">2009</option>
              <option value="2011">2011</option>
              <option value="2012">2012</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
            </select>
          </div>

          <!--Sección 3: Selección de Cápitulos-->
          <div class="filter-container__chapters">
            <label for="filter-chapters">Seleccionar por Cápitulos:</label>
            <select name="chapters" id="filter-chapters" data-testid="select-filter-3">
              <option value="all">Todos</option>
              <option value="9">9</option>
              <option value="12">12</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="20">20</option>
              <option value="24">24</option>
              <option value="25">25</option>
            </select>
          </div>

          <!--Sección 4: Selección de Orden-->
          <div class="filter-container__order">
            <label for="order-select">Ordenar por: </label>
            <select name="name" id="order-select" data-testid="sort-order">
              <option value="all">Orden</option>
              <option value="asc">A-Z</option>
              <option value="desc">Z-A</option> 
            </select>
          </div>
        </div>
        <div class="button-row">
          <!--Botón 1: Limpiar contenedor-->
          <button class="button-clear" data-testid="button-clear">Limpiar</button>
          <!--Botón 2: Métricas Ranking-->
          <button class="metrics">Ranking 3ro°</button>          
          <!--Botón 3: Calcular promedio de capitulos-->
          <button class="button-average" id="button-calculate" data-testid="button-calculate">Curiosidades</button>
        </div>
        <div class="block-average">
          <div id="average-container" class="average-container"></div>
          <div id="average-container1" class="average-container"></div>
          <div id="average-container2" class="average-container"></div>
        </div>
      </nav>
  `;

  // Añadir manejador de eventos para el filtro de género
  headerEl.querySelector('#filter-gender').addEventListener('change', (event) => {
    updateView({ filterBy: 'gender', value: event.target.value });

  });
  // Añadir manejador de eventos para el filtro de year
  headerEl.querySelector('#filter-year').addEventListener('change', (event) => {
    updateView({ filterBy: 'year', value: event.target.value });

  });
  // Añadir manejador de eventos para el filtro de chapters
  headerEl.querySelector('#filter-chapters').addEventListener('change', (event) => {
    updateView({ filterBy: 'chapters', value: event.target.value });

  });
  // Manejar el evento de cambio en el selector de orden
  headerEl.querySelector('#order-select').addEventListener('change', (event) => {
    updateView({ orderBy: event.target.value });
  });
  // Agregar eventos para los botones
  headerEl.querySelector('.button-clear').addEventListener('click', () => {
    updateView({ filterBy: 'all', value: 'all', orderBy: 'all' });
    document.getElementById('filter-gender').value = 'all';
    document.getElementById('filter-year').value = 'all';
    document.getElementById('filter-chapters').value = 'all';
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