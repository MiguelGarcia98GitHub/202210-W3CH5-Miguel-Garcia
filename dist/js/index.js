import { Header } from './components/Header.js';
import { ListOfTwentyPokemons } from './components/ListOfTwentyPokemons.js';
// import { fetchPokemonsPage } from './services/fetchPokemonsPage.js';
console.log('Loaded index.js');
// fetchPokemonsPage(0);
new Header('header');
new ListOfTwentyPokemons('body', 0);
