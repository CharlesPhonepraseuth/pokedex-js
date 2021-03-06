const dataMapper = require('../dataMapper');

const teamController = {

    teamPage: (req, res) => {
        res.render('team', {
            pokemons: req.session.team
        });
    },

    addToTeam: async (req, res) => {
        try {
            const pokemonNum = req.params.numero;
            // firstly, we check if the pokemon is already in the team
            const filteredList = req.session.team.filter(pkmn => {
                return pkmn.numero == pokemonNum;
            });

            if (filteredList.length) {
                return res.render('team', {
                    pokemons: req.session.team,
                    error: 'Ce Pokemon est déjà dans votre équipe.'
                });
            };
            // then, we check if the team is already full (6)
            if (req.session.team.length >= 6) {
                return res.render('team', {
                    pokemons: req.session.team,
                    error: 'Votre équipe comporte déjà 6 pokemons.'
                });
            };

            const pokemonDetails = await dataMapper.getPokemonDetails(pokemonNum)

            req.session.team.push(pokemonDetails.rows[0]);
            res.redirect('/team');
        } catch (err) {
            console.log(err);
            return res.status(500).send(err);
        };
    },

    deleteFromTeam: (req, res) => {
        const pokemonNum = req.params.numero;
        // we delete pokemon by using filter
        req.session.team = req.session.team.filter((pkmn) => {
            // we return every pokemon where the number is different from the selected one
            return pkmn.numero != pokemonNum;
        });
        res.redirect('/team')
    }

};


module.exports = teamController;