// Determine the base URL for the backend API.
// In development, it defaults to localhost:8080 (based on your backend Dockerfile).
const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';

const ApiClient = {
  /**
   * Perform a GET request.
   * @param {string} endpoint - The API endpoint (e.g., '/api/topology')
   * @returns {Promise<any>} - The JSON response
   */
  async get(endpoint) {
    try {
      const response = await fetch(`${BASE_URL}${endpoint}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });
      return this.handleResponse(response);
    } catch (error) {
      console.error(`ApiClient GET Error on ${endpoint}:`, error);
      throw error;
    }
  },

  /**
   * Perform a POST request.
   * @param {string} endpoint - The API endpoint
   * @param {object} data - The payload to send
   * @returns {Promise<any>} - The JSON response
   */
  async post(endpoint, data) {
    try {
      const response = await fetch(`${BASE_URL}${endpoint}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      return this.handleResponse(response);
    } catch (error) {
      console.error(`ApiClient POST Error on ${endpoint}:`, error);
      throw error;
    }
  },

  /**
   * Helper method to process the fetch response.
   */
  async handleResponse(response) {
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP ${response.status}: ${errorText || 'API Request Failed'}`);
    }
    
    // Return empty object if there's no content
    if (response.status === 204) {
      return {};
    }
    
    return response.json();
  }
};

export default ApiClient;
