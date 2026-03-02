// nanoBananaService.js
// This service handles API calls for the Nano Banana Pro integration and image generation.

const axios = require('axios');

class NanoBananaService {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://api.nanobanana.com'; // Example base URL
    }

    async generateImage(prompt) {
        try {
            const response = await axios.post(`${this.baseUrl}/generate`, {
                prompt,
                apiKey: this.apiKey
            });
            return response.data;
        } catch (error) {
            console.error('Error generating image:', error);
            throw error;
        }
    }

    async callApi(endpoint, data) {
        try {
            const response = await axios.post(`${this.baseUrl}/${endpoint}`, data, {
                headers: { 'Authorization': `Bearer ${this.apiKey}` }
            });
            return response.data;
        } catch (error) {
            console.error('API call error:', error);
            throw error;
        }
    }
}

module.exports = NanoBananaService;