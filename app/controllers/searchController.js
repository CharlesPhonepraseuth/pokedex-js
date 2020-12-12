const dataMapper = require('../dataMapper');

const searchController = {

    searchResults: (req, res) => {
        const searchedName = req.body.nom;
        dataMapper.getPokemonByLikeName(searchedName, (err, data) => {
            if (err) {
                console.log(err);
                return res.status(500).send(err);
            };

            res.render('home', {
                pokemons: data.rows
            });
        });
    }

};

module.exports = searchController;