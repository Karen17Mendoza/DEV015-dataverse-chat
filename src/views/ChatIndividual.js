import data from '../data/dataset.js';
import { createSidebarnav } from '../componentes/nav.js';

// Función para obtener un item por ID
const getItemById = (id) => {
  return data.find(item => item.id === id);
};

export const ChatIndividual = (props) => {
  const { id } = props;
  const item = getItemById(id);
  const chatElement = document.createElement('div');
  chatElement.classList.add('chatIndividual-container');
  chatElement.setAttribute("itemscope", "");
  chatElement.setAttribute("itemtype", "https://schema.org/CreativeWork");
  chatElement.setAttribute("data-id", item.id);

  // Crear y añadir la barra lateral
  const sidebar = createSidebarnav();
  chatElement.appendChild(sidebar);
  // Creamos el contenedor para la imagen y descripcion
  const imagAndDescription = document.createElement('div');
  imagAndDescription.classList.add('image-description');

  if (item) {
    imagAndDescription.innerHTML = `
      <img src="${item.imageUrl}" alt="${item.name}" class="item-image" />
      <h2 class="card__title" itemprop="name">${item.name}</h2>
      <p>${item.description}</p>
      `;
  } else {
    imagAndDescription.textContent = 'Item not found';
  }
  // Creamos el contenedor del chat 
  const chatContent = document.createElement('div');
  chatContent.classList.add('chat-content');
  
  if (item) {
    chatContent.innerHTML = `
    <h2>Chat con ${item.name}</h2>
    <div class="chat-header">
      <img src="${item.imageUrl}" alt="${item.name}" class="profile-pic" itemprop="image">
      <div class="chat-header-info">
        <span class="user-name" itemprop="name">${item.name}</span>
        <span class="user-status">Online</span>
      </div>
      </div>
      <div class="chat-messages"></div>
      <div class="chat-input">
        <input type="text" placeholder="Escribe tu mensaje aqui">
        <button class="send-button">
          <span class="material-icons">send</span>
        </button>
    </div>
    `;
  } else {
    chatContent.textContent = 'Item not found';
  }

  // Crear un contenedor para la imagen y el chat
  const contentContainer = document.createElement('div');
  contentContainer.classList.add('content-container');
  contentContainer.append(chatContent, imagAndDescription);

  // Añadir el contenedor de contenido al contenedor principal
  chatElement.appendChild(contentContainer);

  return chatElement;
};