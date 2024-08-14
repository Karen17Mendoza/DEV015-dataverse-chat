import { createSidebarnav } from '../componentes/nav.js';

export function Contact() {
  // Crear el contenedor principal
  const container = document.createElement('div');
  container.className = 'contact-container';

  // Crear el formulario de contacto
  const formElement = document.createElement('form');
  formElement.className = 'contact-form';
  formElement.setAttribute('action', ''); // Se deja vacío, ya que el envío se maneja con mailto
  formElement.setAttribute('method', 'GET'); // Usar GET para que los datos se añadan a la URL del mailto

  // Crear y añadir la barra lateral
  const sidebarNav = createSidebarnav();
  container.appendChild(sidebarNav);

  formElement.innerHTML = `
    <h2 class="contact-title">Contáctanos</h2>
    <p class="contact-subtitle">Si tienes alguna duda o pregunta, completa el formulario a continuación.</p>
    
    <label for="name" class="contact-label">Nombre:</label>
    <input type="text" id="name" name="name" class="contact-input" required>

    <label for="email" class="contact-label">Correo electrónico:</label>
    <input type="email" id="email" name="email" class="contact-input" required>

    <label for="message" class="contact-label">Mensaje:</label>
    <textarea id="message" name="message" class="contact-textarea" rows="5" required></textarea>

    <button type="submit" class="contact-button">Enviar</button>
  `;

  formElement.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita el envío tradicional del formulario

    // Obtener los valores del formulario
    const name = formElement.querySelector('#name').value;
    const email = formElement.querySelector('#email').value;
    const message = formElement.querySelector('#message').value;

    // Crear el enlace mailto con los datos del formulario
    const mailtoLink = `mailto:fatimapolgar2001@gmail.com?subject=Consulta de ${encodeURIComponent(name)}&body=Nombre: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0AMensaje: ${encodeURIComponent(message)}`;

    // Abrir el cliente de correo con el enlace mailto
    window.location.href = mailtoLink;
  });

  // Agregar el formulario al contenedor principal
  container.appendChild(formElement);

  return container;
}
  