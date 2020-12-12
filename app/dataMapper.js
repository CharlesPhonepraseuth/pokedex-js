const client = require('./database');

const dataMapper = {

    getAllPokemons: (callback) => {
        const myQuery = "SELECT * FROM pokemon";
        client.query(myQuery, callback);
    }

};

module.exports = dataMapper;