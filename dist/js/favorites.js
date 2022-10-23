import { Header } from './components/Header.js';
import { ListOfFavouritePokemons } from './components/ListOfFavouritePokemons.js';
console.log('Loaded favorites.js');
// fetchPokemonsPage(0);
new Header('header');
new ListOfFavouritePokemons('body');
const main = () => {
    setTimeout(() => {
        const listOfHTMLCards = document.querySelectorAll('.pokemon__card');
        console.log(listOfHTMLCards);
        listOfHTMLCards.forEach((item) => item.addEventListener('click', () => {
            fetch(`http://localhost:3000/pokemons/${item.id}`, {
                method: 'DELETE',
            });
        }));
    }, 150);
};
main();
