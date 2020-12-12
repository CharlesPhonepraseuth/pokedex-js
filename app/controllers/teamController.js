const dataMapper = require('../dataMapper');

const teamController = {

    teamPage: (req, res) => {
        res.render('team',{
            pokemons: req.session.team
        });
    },

    addToTeam: (req, res) => {
        const pokemonNum = req.params.numero;

        dataMapper.getPokemonDetails(pokemonNum, (err, data) => {
            if (err) {
                console.log(err);
                return res.status(500).send(err);
            };
            
            req.session.team.push(data.rows[0]);
            res.redirect('/team');
        });
    }

};


module.exports = teamController;