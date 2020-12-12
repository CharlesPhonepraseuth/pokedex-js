const client = require('./database');

const dataMapper = {

    getAllPokemons: () => {
        const myQuery = "SELECT * FROM pokemon";
        return client.query(myQuery);
    },

    getPokemonDetails: (numero, callback) => {
        const myQuery = `SELECT * FROM pokemon WHERE numero=$1`;
        const values = [numero];
        client.query(myQuery, values, callback);
    },

    getPokemonTypes: (numero, callback) => {
        const myQuery = `
            SELECT *
            FROM type t
            JOIN pokemon_type pt ON t.id = pt.type_id
            WHERE pt.pokemon_numero=$1`;
        const values = [numero];
        client.query(myQuery, values, callback);
    },

    getAllTypes: (callback) => {
        const myQuery = "SELECT * FROM type";
        client.query(myQuery, callback);
    },

    getPokemonsByType: (typeId, callback) => {
        const myQuery = `
            SELECT *
            FROM pokemon p
            JOIN pokemon_type pt ON p.numero=pt.pokemon_numero
            WHERE pt.type_id=$1`;
        const values = [typeId];
        client.query(myQuery, values, callback);
    },

    getPokemonByLikeName: (name, callback) => {
        const myQuery = `
            SELECT *
            FROM pokemon
            WHERE nom ILIKE $1`;
        const values = [`%${name}%`];
        client.query(myQuery, values, callback);
    },

    getPokemonByNumber: (numero, callback) => {
        const myQuery = `
            SELECT *
            FROM pokemon
            WHERE numero = $1`;
        const values = [numero];
        client.query(myQuery, values, callback);
    }

};

module.exports = dataMapper;