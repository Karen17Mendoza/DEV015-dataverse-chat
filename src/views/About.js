export const About = (props) => {
  const viewEl = document.createElement('div');
  viewEl.textContent = 'This is the About page.';

  if (props.name) {
    const namePara = document.createElement('p');
    namePara.textContent = `Hello, ${props.name}`;
    viewEl.appendChild(namePara);
  }

  return viewEl;
};