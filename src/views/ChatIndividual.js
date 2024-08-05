import data from '../data/dataset.js';
// Función para obtener un item por ID

const getItemById = (id) => {
  return data.find(item => item.id === id);
};

export const ChatIndividual = (props) => {
  const { id } = props;
  const item = getItemById(id);
  const chatElement = document.createElement('div');
  chatElement.setAttribute("itemscope", "");
  chatElement.setAttribute("itemtype", "https://schema.org/CreativeWork");
  chatElement.setAttribute("data-id", item.id);

  if (item) {
    chatElement.innerHTML = `
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