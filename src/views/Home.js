import { navigateTo } from './router.js';

export const Home = (props) => {
  const viewEl = document.createElement('div');
  viewEl.textContent = 'Welcome to the home page!';
  console.log(props.id); 

  const linkEl = document.createElement('a');
  linkEl.href = '#';
  linkEl.textContent = 'Go to About';
  linkEl.addEventListener('click', (event) => {
    event.preventDefault();
    navigateTo('/about', { name: 'Xochitl' });
  });

  viewEl.appendChild(linkEl);
  return viewEl;
};