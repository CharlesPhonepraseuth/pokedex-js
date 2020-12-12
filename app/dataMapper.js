const client = require('./database');

const dataMapper = {

    getAllPokemons: () => {
        const myQuery = "SELECT * FROM pokemon";
        return client.query(myQuery);
    },

    getPokemonDetails: (numero) => {
        const myQuery = `SELECT * FROM pokemon WHERE numero=$1`;
        const values = [numero];
        return client.query(myQuery, values);
    },

    getPokemonTypes: (numero) => {
        const myQuery = `
            SELECT *
            FROM type t
            JOIN pokemon_type pt ON t.id = pt.type_id
            WHERE pt.pokemon_numero=$1`;
        const values = [numero];
        return client.query(myQuery, values);
    },

    getAllTypes: () => {
        const myQuery = "SELECT * FROM type";
        return client.query(myQuery);
    },

    getPokemonsByType: (typeId) => {
        const myQuery = `
            SELECT *
            FROM pokemon p
            JOIN pokemon_type pt ON p.numero=pt.pokemon_numero
            WHERE pt.type_id=$1`;
        const values = [typeId];
        return client.query(myQuery, values);
    },

    getPokemonByLikeName: (name) => {
        const myQuery = `
            SELECT *
            FROM pokemon
            WHERE nom ILIKE $1`;
        const values = [`%${name}%`];
        return client.query(myQuery, values);
    },

    getPokemonByNumber: (numero) => {
        const myQuery = `
            SELECT *
            FROM pokemon
            WHERE numero = $1`;
        const values = [numero];
        return client.query(myQuery, values);
    }

};

module.exports = dataMapper;