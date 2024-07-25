export function ChatIndividual(props) {
  /*const viewEl = document.createElement("div");
  viewEl.classList.add("chat-container");

  const headerEl = document.createElement("h1");
  headerEl.textContent = `Chat sobre Kdrama ${props.id}`;
  headerEl.classList.add("chat-header");

  const messagesEl = document.createElement("div");
  messagesEl.classList.add("chat-messages");

  const inputContainerEl = document.createElement("div");
  inputContainerEl.classList.add("chat-input-container");

  const inputEl = document.createElement("input");
  inputEl.type = "text";
  inputEl.placeholder = "Escribe un mensaje...";
  inputEl.classList.add("chat-input");

  const sendButtonEl = document.createElement("button");
  sendButtonEl.textContent = "Enviar";
  sendButtonEl.classList.add("chat-send-button");

  inputContainerEl.appendChild(inputEl);
  inputContainerEl.appendChild(sendButtonEl);

  viewEl.appendChild(headerEl);
  viewEl.appendChild(messagesEl);
  viewEl.appendChild(inputContainerEl);

  // Event listener para enviar mensajes
  sendButtonEl.addEventListener("click", () => {
    const messageText = inputEl.value.trim();
    if (messageText !== "") {
      const messageEl = document.createElement("div");
      messageEl.classList.add("chat-message", "chat-message-sent");
      messageEl.textContent = messageText;
      messagesEl.appendChild(messageEl);
      inputEl.value = "";

      // Simulación de respuesta automática
      setTimeout(() => {
        const replyEl = document.createElement("div");
        replyEl.classList.add("chat-message", "chat-message-received");
        replyEl.textContent = "¡Gracias por tu mensaje! ¿En qué puedo ayudarte?";
        messagesEl.appendChild(replyEl);
        messagesEl.scrollTop = messagesEl.scrollHeight;
      }, 1000);

      messagesEl.scrollTop = messagesEl.scrollHeight;
    }
  });*/

  return viewEl;
}