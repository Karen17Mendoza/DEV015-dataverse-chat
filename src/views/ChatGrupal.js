import data from '../data/dataset.js';
import { createSidebarnav } from '../componentes/nav.js';
import { communicateWithOpenAI } from '../lib/openAIApi.js';

// Función para obtener los detalles de todos los doramas
const getAllDoramaDetails = () => {
  return data.map(item => ({
    name: item.name,
    shortDescription: item.shortDescription,
  }));
};

export const ChatGrupal = () => {
  const chatElement = document.createElement('div');
  chatElement.classList.add('chatGrupal-container');
  chatElement.setAttribute("itemscope", "");
  chatElement.setAttribute("itemtype", "https://schema.org/CreativeWork");

  // Crear y añadir la barra lateral
  const sidebarNav = createSidebarnav();
  chatElement.appendChild(sidebarNav);

  // Crear el contenedor para la lista de doramas
  const doramaListContainer = document.createElement('div');
  doramaListContainer.classList.add('dorama-list-container');

  // Estilo para la columna de imágenes pequeñas
  doramaListContainer.style.display = 'flex';
  doramaListContainer.style.flexDirection = 'column';
  doramaListContainer.style.maxHeight = '100vh';
  doramaListContainer.style.overflowY = 'auto';

  // Iterar sobre todos los doramas en el dataset y crear elementos pequeños para cada uno
  data.forEach(dorama => {
    const doramaItem = document.createElement('div');
    doramaItem.classList.add('dorama-item');
    doramaItem.style.display = 'flex';
    doramaItem.style.alignItems = 'center';
    doramaItem.style.margin = '5px 0';

    doramaItem.innerHTML = `
      <img src="${dorama.imageUrl}" alt="${dorama.name}" class="dorama-image" />
      <p class="dorama-title" style="margin-left: 20px; font-size: 17px;">${dorama.name}</p>
    `;
    doramaListContainer.appendChild(doramaItem);
  });

  // Crear el contenedor del chat
  const chatContent = document.createElement('div');
  chatContent.classList.add('chat-content');
  chatContent.innerHTML = `
    <div class="chat-header">
      <h2 class="group-chat-title">Chat Grupal</h2>
    </div>
    <div class="typing-indicators"></div>
    <div class="chat-messages"></div>
    <div class="chat-input">
      <input type="text" placeholder="Escribe tu mensaje aquí">
      <button class="send-button">
        <span class="material-icons">send</span>
      </button>
    </div>
  `;

  // Crear un contenedor para la imagen y el chat
  const contentContainer = document.createElement('div');
  contentContainer.classList.add('content-container');
  contentContainer.append(sidebarNav, chatContent, doramaListContainer);

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
    aiMessageElement.textContent = message;
    chatMessages.appendChild(aiMessageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Desplazarse al final del chat
  };

  // Al hacer clic en el botón de enviar
  sendButton.addEventListener('click', () => {
    const userMessage = chatInput.value.trim();
    if (userMessage) {
      addUserMessage(userMessage);  // Añadir mensaje del usuario
      chatInput.value = '';  // Limpiar el input

      const doramaDetailsArray = getAllDoramaDetails();

      const messages = [
        { role: 'system', content: 'You are now in a group chat with multiple characters from various doramas. Respond as if you were all these characters discussing the topic.' },
        { role: 'user', content: userMessage },
        ...doramaDetailsArray.map(dorama => ({
          role: 'assistant',
          content: `Character from ${dorama.name}: ${dorama.shortDescription}`
        }))
      ];

      communicateWithOpenAI(messages)
        .then(response => {
          addAIMessage(response);  // Añadir respuesta de la IA
        })
        .catch(error => {
          console.error('Error en el chat grupal:', error);
        });
    }
  });
  
  return chatElement;
};
