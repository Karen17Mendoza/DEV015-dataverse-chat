import { communicateWithOpenAI } from "../src/lib/openAIApi.js"; 
import { getApiKey } from "../src/lib/apiKey.js";

jest.mock('../src/lib/apiKey.js'); // Mock de getApiKey

describe('communicateWithOpenAI', () => {
  const mockMessages = [{ role: 'user', content: 'Hola' }];
  const mockApiKey = 'test-api-key';

  beforeEach(() => {
    getApiKey.mockReturnValue(mockApiKey); // Simula que getApiKey devuelve la API Key
  });

  afterEach(() => {
    jest.clearAllMocks(); // Limpia los mocks después de cada test
  });

  it('debería lanzar un error si no hay API Key', () => {
    getApiKey.mockReturnValue(null); // Simula que no hay API Key

    expect(() => communicateWithOpenAI(mockMessages)).toThrow('API Key no disponible. Por favor, configúrela.');
  });

  it('debería devolver el contenido del mensaje en caso de éxito', async () => {
    const mockResponse = {
      choices: [{ message: { content: 'respuesta de prueba' } }]
    };

    const mockFetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse)
      })
    );

    // Reemplaza la implementación de fetch solo dentro de este test
    window.fetch = mockFetch;

    const result = await communicateWithOpenAI(mockMessages);

    expect(result).toBe('respuesta de prueba');
    expect(mockFetch).toHaveBeenCalledWith(
      'https://api.openai.com/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${mockApiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-4o',
          messages: mockMessages,
          max_tokens: 150
        })
      }
    );
  });

  it('debería manejar errores en la solicitud fetch', async () => {
    const mockFetch = jest.fn(() => Promise.reject(new Error('Fetch error')));

    window.fetch = mockFetch;

    await expect(communicateWithOpenAI(mockMessages)).rejects.toThrow('Fetch error');
  });
});
