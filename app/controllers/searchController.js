const dataMapper = require('../dataMapper');

const searchController = {

    searchResults: async (req, res) => {
        try {
            const searchedValue = req.body.nom;
            let pokemon;
            
            // this regex is to check if searchedName is a number
            if (searchedValue.match(/^\d+$/)) {
                pokemon = await dataMapper.getPokemonByNumber(searchedValue);
            } else {
                pokemon = await dataMapper.getPokemonByLikeName(searchedValue);
            };
            
            res.render('home', {
                pokemons: pokemon.rows
            });
        } catch (err) {
            console.log(err)
            return res.status(500).send(err);
        };
    }

};

module.exports = searchController;