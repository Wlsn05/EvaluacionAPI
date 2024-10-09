const axios = require('axios');
const BASE_URL = 'https://starwars-n5ec-developuptcs-projects.vercel.app';

class CharacterModel {
    static async getAllCharacters() {
        const response = await axios.get(BASE_URL);
        return response.data;
    }

    static async getCharacterById(objectId) {
        const response = await axios.get(`${BASE_URL}/${objectId}`);
        return response.data;
    }

    static async searchCharactersByName(name) {
        const response = await axios.get(`${BASE_URL}/name/${name}`);
        return response.data;
    }
}

module.exports = CharacterModel;