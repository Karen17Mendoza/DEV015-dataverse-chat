import data from '../data/dataset.js';
import { createSidebarnav } from '../componentes/nav.js';
import { communicateWithOpenAI } from '../lib/openAIApi.js';

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

  // Crear y añadir la barra lateral
  const sidebarNav = createSidebarnav();
  chatElement.appendChild(sidebarNav);

  // Crear el contenedor para la imagen y descripción
  const imagAndDescription = document.createElement('div');
  imagAndDescription.classList.add('image-description');

  if (item) {
    imagAndDescription.innerHTML = `
      <h2 class="card__title__chat" itemprop="name">${item.name}</h2>
      <img src="${item.imageUrl}" alt="${item.name}" class="item-image" />
      <p class="card__description__chat" itemprop="description">${item.shortDescription}</p>
      <div class="card__list">
        <p class="card__gender"><strong>Género:</strong> <span itemprop="gender">${item.facts.gender}</span></p>
        <p class="card__year"><strong>Año:</strong> <span itemprop="datePublished">${item.facts.year}</span></p>
        <p class="card__chapters"><strong>Número de capítulos:</strong> <span itemprop="numberOfEpisodes">${item.facts.chapters}</span></p>
      </div>
    `;
  } else {
    imagAndDescription.textContent = 'Item not found';
  }

  // Crear el contenedor del chat
  const chatContent = document.createElement('div');
  chatContent.classList.add('chat-content');

  if (item) {
    chatContent.innerHTML = `
      <div class="chat-header">
        <div class="image-container">
          <img src="${item.imageUrl}" alt="${item.name}" class="profile-pic" itemprop="image">
          <div class="status-indicator"></div> <!-- Este es el punto verde -->
        </div>
        <div class="chat-header-info">
          <span class="user-name" itemprop="name">${item.name}</span>
          <span class="user-status">Online</span>
        </div>
      </div>
      <div class="chat-messages"></div>
      <div class="chat-input">
        <input type="text" placeholder="Escribe tu mensaje aquí">
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
  contentContainer.append(sidebarNav, chatContent, imagAndDescription);

  // Añadir el contenedor de contenido al contenedor principal
  chatElement.appendChild(contentContainer);

  // Obtener elementos del DOM
  const sendButton = chatContent.querySelector('.send-button');
  const chatInput = chatContent.querySelector('.chat-input input');
  const chatMessages = chatContent.querySelector('.chat-messages');

  // Función para añadir un mensaje del usuario al chat
  const addUserMessage = (message) => {
    const userMessageElement = document.createElement('div');
    userMessageElement.classList.add('message', 'user-message');
    userMessageElement.textContent = message;
    chatMessages.appendChild(userMessageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Desplazarse al final del chat
  };

  // Función para añadir un mensaje de la IA al chat
  const addAIMessage = (message) => {
    const aiMessageElement = document.createElement('div');
    aiMessageElement.classList.add('message', 'ai-message');
    aiMessageElement.innerHTML = `
    <div class="ai-message-container">
      <img src="${item.imageUrl}" alt="${item.name}" class="ai-profile-pic" />
      <div class="ai-message-content">${message}</div>
    </div>
  `;
    chatMessages.appendChild(aiMessageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Desplazarse al final del chat
  };

  // Al hacer clic en el botón de enviar
  sendButton.addEventListener('click', () => {
    const userMessage = chatInput.value.trim();
    if (userMessage && item) {
      addUserMessage(userMessage);  // Añadir mensaje del usuario
      chatInput.value = '';  // Limpiar el input

      const messages = [
        { role: 'system', content: `You are now speaking to a character from the dorama titled ${item.name}. The story is about: ${item.shortDescription}. Please respond with information relevant to this dorama.` },
        { role: 'user', content: userMessage }
      ];

      communicateWithOpenAI(messages)
        .then(response => {
          addAIMessage(response);  // Añadir respuesta de la IA
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  });

  return chatElement;
};