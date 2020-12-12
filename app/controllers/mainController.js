const dataMapper = require('../dataMapper');

const mainController = {

    homePage: async (req, res) => {
        try {
            const pokemons = await dataMapper.getAllPokemons();

            // if everything is okay, we send data from data.rows to home view
            res.render('home', {
                pokemons: pokemons.rows
            });
        } catch (err) {
            // if we found an error, we log this one, and we send back to navigator
            console.log(err);
            return res.status(500).send(err);
        };
    },

    pokemonPage: async (req, res) => {
        try {
            // we share an object with every views who will contain labels and stats
            res.locals.statsLabels = {
                pv: 'PV',
                attaque: 'Attaque',
                defense: 'Défense',
                attaque_spe:'Attaque Spé.',
                defense_spe:'Défense Spé.',
                vitesse: 'Vitesse'
            };

            const pokemonNum = req.params.numero;
            const pokemonDetails = await dataMapper.getPokemonDetails(pokemonNum);
            const pokemonType = await dataMapper.getPokemonTypes(pokemonNum);

            res.render('details', {
                pokemon: pokemonDetails.rows[0],
                types: pokemonType.rows
            });
        } catch (err) {
            console.log(err);
            return res.status(500).send(err);
        }
    },

    page404: (req, res) => {
        res.render('404', {
            notFound: [
                ['p', 'a', 'g', 'e'],
                ['n', 'o', 't'],
                ['f', 'o', 'u', 'n', 'd']
            ]
        });
    }

};

module.exports = mainController;