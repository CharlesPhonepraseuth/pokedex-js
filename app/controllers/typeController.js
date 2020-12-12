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

    pokemonsByType: (req, res) => {
        const typeId = req.params.typeId;
        dataMapper.getPokemonsByType(typeId, (err, data) => {
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

module.exports = typeController;