const express = require('express');
const router = express.Router();

const {
    mainController
} = require('./controllers');

router.get('/', mainController.homePage);
router.get('/pokemon/:numero', mainController.pokemonPage);

module.exports = router;