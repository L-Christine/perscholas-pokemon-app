const mongoose = require('mongoose')

const pokemonSchema = new mongoose.Schema({
    name: { type: String, required: true},
    img: { type: String, required: true}
})

const dbPokemon = mongoose.model('dbPokemon', pokemonSchema)

module.exports = dbPokemon