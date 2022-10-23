import { Header } from './components/Header.js';
import { ListOfFavouritePokemons } from './components/ListOfFavouritePokemons.js';

// fetchPokemonsPage(0);
new Header('header');
new ListOfFavouritePokemons('body');

const main = async () => {
    setTimeout(() => {
        const listOfHTMLCards = document.querySelectorAll('.pokemon__card');

        listOfHTMLCards.forEach((item) =>
            item.addEventListener('click', () => {
                fetch(`http://localhost:3000/pokemons/${item.id}`, {
                    method: 'DELETE',
                });
            })
        );
    }, 150);
};

main();
