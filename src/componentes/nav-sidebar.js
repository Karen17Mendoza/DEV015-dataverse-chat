import { navigateTo } from '../router.js';

export const createSidebar = (updateView) => {
  const sidebar = document.createElement('nav');
  sidebar.classList.add('navSidebar');
    
  sidebar.innerHTML = `
    <div>
      <button class="material-icons sidebar__button">
      close
      </button>
      <button class="material-icons header__button">menu</button>
      <h1 class="sidebar__title">F&K.</h1>
      <nav class="nav sidebar__nav-links">
        <a id="homeButton" class="sidebar__link">Home</a>
        <a id="grupalButton" class="sidebar__link">Chat Grupal</a>
        <a id="apiKeyButton" class="sidebar__link">API Key</a>
        <a id="contactButton" class="sidebar__link">Contact</a>
      </nav>
    </div>
    <div>
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
            <label for="filter-year">Filtrar por Año:</label>
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
            <label for="filter-chapters">Filtrar por Capítulos:</label>
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

      </nav>
    </div>
    <div>
      <nav class="nav sidebar__nav-social">
        <a href="https://linkedin.com/in/karen-mendoza-web-developer" class="nav__social">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
        </a>
        <a href="https://github.com/Karen17Mendoza" class="nav__social">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
        </a>
        <a href="https://linkedin.com/in/franchesca-zelaya" class="nav__social">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
        </a>
        <a href="https://github.com/FranchescaF" class="nav__social">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
        </a>
      </nav>
      <p class="sidebar__copyright">Copyright ©2024 Karen Mendoza & Fatima Zelaya.</p>
    </div>
  `;
  
  const resetSelectIndex = (exceptSelectId) => {
    const selects = ['filter-gender', 'filter-year', 'filter-chapters'];
    selects.forEach(id => {
      if (id !== exceptSelectId) {
        document.getElementById(id).value = 'all';
      }
    });
  };

  // Añadir manejador de eventos para el filtro de género
  sidebar.querySelector('#filter-gender').addEventListener('change', (event) => {
    updateView({ filterBy: 'gender', value: event.target.value });
    resetSelectIndex('filter-gender');
  });
  // Añadir manejador de eventos para el filtro de year
  sidebar.querySelector('#filter-year').addEventListener('change', (event) => {
    updateView({ filterBy: 'year', value: event.target.value });
    resetSelectIndex('filter-year');
  });
  // Añadir manejador de eventos para el filtro de chapters
  sidebar.querySelector('#filter-chapters').addEventListener('change', (event) => {
    updateView({ filterBy: 'chapters', value: event.target.value });
    resetSelectIndex('filter-chapters');
  });
  // Manejar el evento de cambio en el selector de orden
  sidebar.querySelector('#order-select').addEventListener('change', (event) => {
    updateView({ orderBy: event.target.value });
  });

  // Selecciona el botón usando su ID
  const apiKeyButton = sidebar.querySelector('#apiKeyButton');

  // Agrega un event listener para el clic
  apiKeyButton.addEventListener('click', () => {
  // Llama a la función navigateTo para redirigir a la vista de Api Key
    navigateTo('/apiKey/');
  });

  // Selecciona el botón usando su ID
  const homeButton = sidebar.querySelector('#homeButton');
  // Agrega un event listener para el clic
  homeButton.addEventListener('click', () => {
  // Llama a la función navigateTo para redirigir a la vista de Api Key
    navigateTo('/');
  });

  const grupalButton = sidebar.querySelector('#grupalButton');
  // Agrega un event listener para el clic
  grupalButton.addEventListener('click', () => {
  // Llama a la función navigateTo para redirigir a la vista de Api Key
    navigateTo('/chatGrupal/');
  });
  // Selecciona el botón usando su ID
  const contactButton = sidebar.querySelector('#contactButton');
  // Agrega un event listener para el clic
  contactButton.addEventListener('click', () => {
  // Llama a la función navigateTo para redirigir a la vista de Api Key
    navigateTo('/Contact/');
  });

  // Añadir el event listener para cerrar la barra lateral
  const closeButton = sidebar.querySelector('.sidebar__button');
  closeButton.addEventListener('click', () => {
    sidebar.classList.add('closed');
  });

  // Añadir el event listener para desplegar la barra lateral
  const menuButton = sidebar.querySelector('.header__button');
  menuButton.addEventListener('click', () => {
    sidebar.classList.remove('closed'); // Remueve la clase para desplegar la barra lateral
  });

  return sidebar;
};