const express = require('express');
const router = express.Router();

const {
    mainController,
    typeController,
    teamController
} = require('./controllers');

router.get('/', mainController.homePage);
router.get('/pokemon/:numero', mainController.pokemonPage);

router.get('/types', typeController.typesPage);
router.get('/type/:typeId', typeController.pokemonsByType);

router.get('/team', teamController.teamPage);

module.exports = router;