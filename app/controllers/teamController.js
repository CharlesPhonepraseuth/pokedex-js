const teamController = {

    teamPage: (req, res) => {
        res.render('team',{
            pokemons: req.session.team
        });
    }

};


module.exports = teamController;