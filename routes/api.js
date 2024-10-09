const express = require('express');
const router = express.Router();
const CharacterController = require('../controllers/characterController');

// Obtener todos los personajes
router.get('/', CharacterController.getAll);

// Obtener personaje por ObjectId
router.get('/:objectId', CharacterController.getById);

// Buscar personajes por nombre
router.get('/name/:name', CharacterController.searchByName);

module.exports = router;