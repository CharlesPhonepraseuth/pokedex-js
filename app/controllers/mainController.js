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
                console.log('POKEMON :: ', data.rows[0]);
                console.log('TYPES :: ', data2.rows);
            });
        });
    }

};

module.exports = mainController;