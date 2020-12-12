const dataMapper = require('../dataMapper');

const mainController = {

    homePage:  (req, res) => {
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
    }

};

module.exports = mainController;