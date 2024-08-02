export const createSidebar = () => {
  const sidebar = document.createElement('div');
  sidebar.classList.add('sidebar');
    
  sidebar.innerHTML = `
    <button class="material-icons sidebar__button">close</button>
    <div>
      <h1 class="sidebar__title">F&K.</h1>
      <nav class="nav sidebar__nav-links">
        <a href="./Home.js" class="sidebar__link">Home</a>
        <a href="#" class="sidebar__link">Chat Grupal</a>
        <a href="#" class="sidebar__link">Api Key</a>
        <a href="#" class="sidebar__link">Contact</a>
      </nav>
    </div>
    <div>
      <nav class="nav sidebar__nav-social">
        <a href="#" class="nav__social">
          <i data-lucide="Linkedln"></i>
        </a>
        <a href="#" class="nav__social">
          <i data-lucide="Linkedln"></i>
        </a>
        <a href="#" class="nav__social">
          <i data-lucide="github"></i>
        </a>
        <a href="#" class="nav__social">
          <i data-lucide="github"></i>
        </a>
      </nav>
      <p class="sidebar__copyright">Copyright ©2024 Karen Mendoza & Fatima Zelaya.</p>
    </div>
  `;
  
  return sidebar;
};