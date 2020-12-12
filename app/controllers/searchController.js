const dataMapper = require('../dataMapper');

const searchController = {

    searchResults: (req, res) => {
        const searchedName = req.body.nom;

        // this regex is to check if searchedName is a number
        if (searchedName.match(/^\d+$/)) {
            dataMapper.getPokemonByNumber(searchedName, (err, data) => {
                if (err) {
                    console.log(err);
                    return res.status(500).send(err);
                };

                res.render('home', {
                    pokemons: data.rows
                });
            });
        } else {
            dataMapper.getPokemonByLikeName(searchedName, (err, data) => {
                if (err) {
                    console.log(err);
                    return res.status(500).send(err);
                };

                res.render('home', {
                    pokemons: data.rows
                });
            });
        };
    }

};

module.exports = searchController;