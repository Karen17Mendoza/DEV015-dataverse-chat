import data from '../data/dataset.js';

export const ChatIndividual = (name) => {
  const item = data.find(item => item.name === name);
  
  if (!item) {
    const errorElement = document.createElement('div');
    errorElement.innerHTML = '<h2>Item not found</h2>';
    return errorElement;
  }

  const chatElement = document.createElement('div');
  chatElement.innerHTML = `
    <h2>Chat with ${item.name}</h2>
    <p>${item.description}</p>
    <!-- Aquí va el contenido del chat -->
  `;

  return chatElement;
};