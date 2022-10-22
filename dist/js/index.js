import { Header } from './components/Header.js';
import { ListOfTwentyPokemons } from './components/ListOfTwentyPokemons.js';
console.log('Loaded index.js');
// fetchPokemonsPage(0);
new Header('header');
new ListOfTwentyPokemons('body', 1);
const main = () => {
    setTimeout(() => {
        const listOfHTMLPokemonCards = document.querySelectorAll('.pokemon__card');
        listOfHTMLPokemonCards.forEach((item) => {
            item.addEventListener('click', () => {
                window.open(`http://127.0.0.1:5500/dist/details.html?${item.id}`);
            });
        });
        console.log(listOfHTMLPokemonCards);
    }, 200);
};
main();
