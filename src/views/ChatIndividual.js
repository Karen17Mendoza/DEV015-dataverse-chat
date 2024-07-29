import data from '../data/dataset.js';

export const ChatIndividual = (id) => {
  const mainElement = document.createElement('div');
  const item = data.find(d => d.id === id);

  mainElement.innerHTML = `
    <h1>${item.name}</h1>
    <img src="${item.imageUrl}" alt="${item.name}" />
    <p>${item.description}</p>
  `;

  return mainElement;
};