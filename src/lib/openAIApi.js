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
      max_tokens: 200
    })
  })
    .then(response => {
      //if (!response.ok) {
      //  throw new Error(`Error en la solicitud: ${response.status} - ${response.statusText}`);
      //}
      return response.json();
    })
    .then(data => {
      //if (data && data.choices && data.choices.length > 0) {
      console.log(data.choices);
      return data.choices[0].message.content;
      //} else {
      //  throw new Error('No se obtuvo respuesta de OpenAI');
      //}
    })
    .catch(error => {
      console.error('Error al comunicarse con OpenAI:', error);
      throw error;
    });
};
export const interactWithCharacter = (characterName, userMessage, doramaDetails) => {
  const messages = [
    { role: 'system', content: `You are now speaking to ${characterName} from the dorama titled ${doramaDetails.name}. The story is about: ${doramaDetails.shortDescription}. Only respond with information relevant to this dorama.` },
    { role: 'user', content: userMessage },
  ];

  // Llamar a la función para comunicarte con OpenAI
  communicateWithOpenAI(messages)
    .then((response) => {
      console.log(`${characterName} responde:`, response);
      // Aquí puedes manejar la respuesta, como mostrarla en la UI
    })
    .catch((error) => {
      console.error('Error al interactuar con el personaje:', error);
    });
};
