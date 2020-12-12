const express = require('express');
const router = express.Router();

const {
    mainController,
    typeController
} = require('./controllers');

router.get('/', mainController.homePage);
router.get('/pokemon/:numero', mainController.pokemonPage);

router.get('/types', typeController.typesPage);

module.exports = router;