const CharacterModel = require('../models/characterModel');

class CharacterController {
  static async getAll(req, res) {
    try {
      const characters = await CharacterModel.getAllCharacters();
      // Verificamos si es un array
      if (!Array.isArray(characters)) {
        return res.render('index', { characters: [] });
      }
      res.render('index', { characters });
    } catch (error) {
      console.error('Error al recuperar los personajes:', error);
      res.render('index', { characters: [] }); // En caso de error, mostramos un array vacío
    }
  }
  static async getById(req, res) {
    const { objectId } = req.params;
    try {
        const character = await CharacterModel.getCharacterById(objectId);
        // Verificamos si el personaje existe
        if (!character) {
            return res.render('index', { characters: [] });
        }
        res.render('index', { characters: [character] }); // Pasamos el objeto como un array
    } catch (error) {
        console.error('Error al recuperar el personaje:', error);
        res.render('index', { characters: [] }); // En caso de error, mostramos un array vacío
    }
}

  static async searchByName(req, res) {
    const { name } = req.params;
    try {
      const characters = await CharacterModel.searchCharactersByName(name);
      // Verificamos si es un array
      if (!Array.isArray(characters)) {
        return res.render('index', { characters: [] });
      }
      res.render('index', { characters });
    } catch (error) {
      console.error('Error al buscar personajes:', error);
      res.render('index', { characters: [] }); // En caso de error, mostramos un array vacío
    }
  } 1
}

module.exports = CharacterController;