import { getAllPokemons } from './services/fetchAllPokemons.js';
import { getSinglePokemon } from './services/fetchSinglePokemon.js';

console.log('Loaded index.js');

getAllPokemons();
getSinglePokemon('pikachu');
