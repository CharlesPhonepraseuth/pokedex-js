const dataMapper = require('../dataMapper');

const mainController = {

    homePage:  (req, res) => {
        dataMapper.getAllPokemons((err, data) => {
            // if we found an error, we log this one, and we send back to navigator
            if (err) {
                console.log(err);
                return res.status(500).send(err);
            };

            console.log(data.rows);
        });
    }

};

module.exports = mainController;