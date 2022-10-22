import { ListOfTwentyPokemons } from './components/ListOfTwentyPokemons.js';
import { SinglePokemonCard } from './components/SinglePokemonCard.js';
// import { fetchPokemonsPage } from './services/fetchPokemonsPage.js';
console.log('Loaded index.js');
// fetchPokemonsPage(0);
new SinglePokemonCard('body');
new ListOfTwentyPokemons('body', 1);
