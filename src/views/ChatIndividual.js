import data from '../data/dataset.js';
// Función para obtener un item por ID

const getItemById = (id) => {
  return data.find(item => item.id === id);
};

export const ChatIndividual = (props) => {
  const { id } = props;
  const item = getItemById(id);
  const chatElement = document.createElement('div');

  if (item) {

    chatElement.innerHTML = `
    <h2>Chat with ${item.name}</h2>
    <p>${item.description}</p>
    <!-- Aquí va el contenido del chat -->
  `;
  } else {
    chatElement.textContent = 'Item not found';
  }
  return chatElement;
};

/*export function ChatIndividual(props) {
  const viewEl = document.createElement('div');
  viewEl.innerHTML = `
    <h1>Chat Individual</h1>
    <p>ID: ${props.id}</p>
  `;
  return viewEl;
}*/