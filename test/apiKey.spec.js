// apiKey.test.js
import { getApiKey, setApiKey } from "../src/lib/apiKey.js";

describe('getApiKey', () => {
  it('debería devolver el valor de la API Key almacenada en Local Storage', () => {
    const testApiKey = 'test-api-key';
    localStorage.setItem('api-key', testApiKey); // Establece la API Key en Local Storage

    const apiKey = getApiKey();

    expect(apiKey).toBe(testApiKey);
  });
});

describe('setApiKey', () => {
  it('debería establecer correctamente la API Key en Local Storage', () => {
    const testApiKey = 'new-test-api-key';

    setApiKey(testApiKey); // Guarda la API Key en Local Storage

    const storedApiKey = localStorage.getItem('api-key'); // Verifica si se guardó correctamente

    expect(storedApiKey).toBe(testApiKey);
  });
});
