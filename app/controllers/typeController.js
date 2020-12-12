const dataMapper = require('../dataMapper');

const typeController = {
    
    typesPage: async (req, res) => {
        try {
            const allPokemonTypes = await dataMapper.getAllTypes();
            
            res.render('types', {
                types: allPokemonTypes.rows
            });
        } catch (err) {
            console.log(err);
            return res.status(500).send(err);
        };
    },

    pokemonsByType: async (req, res) => {
        try {
            const typeId = req.params.typeId;
            const pokemonsByType = await dataMapper.getPokemonsByType(typeId);

            res.render('home', {
                pokemons: pokemonsByType.rows
            });
        } catch (error) {
            return res.status(500).send(err);
        };
    }

};

module.exports = typeController;