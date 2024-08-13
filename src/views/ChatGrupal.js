import data from '../data/dataset.js';
import { createSidebarnav } from '../componentes/nav.js';
import { communicateWithOpenAI } from '../lib/openAIApi.js';

export const ChatGrupal = () => {
  const chatElement = document.createElement('div');
  chatElement.classList.add('chatGrupal-container');

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
      <img src="${dorama.imageUrl}" alt="${dorama.name}" class="dorama-image" style="width: 40px; height: 40px;" />
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
  const typingIndicators = chatContent.querySelector('.typing-indicators');

  // Estado para rastrear los doramas que están escribiendo
  const typingState = {};

  // Función para añadir un mensaje del usuario al chat
  const addUserMessage = (message) => {
    const userMessageElement = document.createElement('div');
    userMessageElement.classList.add('message', 'user-message');
    userMessageElement.textContent = message;
    chatMessages.appendChild(userMessageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Desplazarse al final del chat
  };

  // Función para añadir un mensaje de la IA al chat
  const addAIMessage = (dorama, message) => {
    const aiMessageElement = document.createElement('div');
    aiMessageElement.classList.add('message', 'ai-message');
    aiMessageElement.innerHTML = `
      <img src="${dorama.imageUrl}" alt="${dorama.name}" class="dorama-image" style="width: 40px; height: 40px;" />
      <p>${message}</p>
    `;
    chatMessages.appendChild(aiMessageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Desplazarse al final del chat
  };

  // Función para mostrar el indicador de que se está escribiendo
  const showTypingIndicator = () => {
    typingIndicators.innerHTML = `<p>Los doramas están escribiendo...</p>`;
  };

  // Función para actualizar el contador de doramas escribiendo
  const updateTypingCounter = () => {
    const typingCount = Object.values(typingState).filter(isTyping => isTyping).length;
    const totalDoramaCount = data.length;
    typingIndicators.innerHTML = `<p>${typingCount} doramas están escribiendo, ${totalDoramaCount - typingCount} ya enviarón su respuesta.</p>`;
  };

  // Función para interactuar con los doramas
  const interactWithDorama = () => {
    const userMessage = chatInput.value.trim().toLowerCase();
    if (userMessage) {
      addUserMessage(userMessage);  // Añadir mensaje del usuario
      chatInput.value = '';  // Limpiar el input

      showTypingIndicator();  // Mostrar el indicador de que se está escribiendo

      // Inicializar el estado de escritura
      data.forEach(dorama => {
        typingState[dorama.name] = true;
      });
      updateTypingCounter();  // Actualizar contador

      // Iterar sobre todos los doramas y generar una respuesta
      data.forEach(dorama => {
        const messages = [
          { role: 'system', content: `You are a character from the dorama titled ${dorama.name}. The story is about: ${dorama.shortDescription}. Please respond as a character from this dorama.` },
          { role: 'user', content: userMessage }
        ];

        // Simular un retraso para que la IA responda
        setTimeout(() => {
          communicateWithOpenAI(messages)
            .then(response => {
              addAIMessage(dorama, response);  // Añadir respuesta de la IA
              typingState[dorama.name] = false;  // Marcar que ha terminado de escribir
              updateTypingCounter();  // Actualizar contador
            })
            .catch(error => {
              console.error('Error:', error);
            });
        }, Math.random() * 2000 + 1000); // Retraso aleatorio entre 1 y 3 segundos
      });
    }
  };

  // Al hacer clic en el botón de enviar
  sendButton.addEventListener('click', interactWithDorama);

  return chatElement;
};
