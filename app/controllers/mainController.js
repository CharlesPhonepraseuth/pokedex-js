const dataMapper = require('../dataMapper');

const mainController = {

    homePage: (req, res) => {
        dataMapper.getAllPokemons((err, data) => {
            // if we found an error, we log this one, and we send back to navigator
            if (err) {
                console.log(err);
                return res.status(500).send(err);
            };

            // if everything is okay, we send data from data.rows to home view
            res.render('home', {
                pokemons: data.rows
            });
        });
    },

    pokemonPage: (req, res) => {
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

        dataMapper.getPokemonDetails(pokemonNum, (err, data) => {
            if (err) {
                console.log(err);
                return res.status(500).send(err);
            }
            // to avoid complex query, we do 2 separate queries
            dataMapper.getPokemonTypes(pokemonNum, (err2, data2) => {
                if (err2) {
                    console.log(err2);
                    return res.status(500).send(err2);
                };
                
                res.render('details', {
                    pokemon: data.rows[0],
                    types: data2.rows
                  });
            });
        });
    }

};

module.exports = mainController;