const express = require('express');
const router = express.Router();

const {
    mainController,
    typeController,
    teamController,
    searchController
} = require('./controllers');

router.get('/', mainController.homePage);
router.get('/pokemon/:numero', mainController.pokemonPage);

router.get('/types', typeController.typesPage);
router.get('/type/:typeId', typeController.pokemonsByType);

router.get('/team', teamController.teamPage);
router.get('/team/add/:numero', teamController.addToTeam);
router.get('/team/delete/:numero', teamController.deleteFromTeam);

router.post('/search', searchController.searchResults);

module.exports = router;