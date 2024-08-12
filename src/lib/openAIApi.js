import { getApiKey } from './apiKey.js';

export const communicateWithOpenAI = (messages) => {
  const apiKey = getApiKey();

  if (!apiKey) {
    throw new Error('API Key no disponible. Por favor, configúrela.');
  }

  return fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: 'gpt-4o', // o el modelo que estés utilizando
      messages: messages,
      max_tokens: 150
    })
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status} - ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => {
      if (data && data.choices && data.choices.length > 0) {
        return data.choices[0].message.content.trim();
      } else {
        throw new Error('No se obtuvo respuesta de OpenAI');
      }
    })
    .catch(error => {
      console.error('Error al comunicarse con OpenAI:', error);
      throw error;
    });
};
