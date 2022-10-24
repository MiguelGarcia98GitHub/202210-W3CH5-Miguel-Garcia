import { ButtonNextPage } from './components/ButtonNextPage.js';
import { Header } from './components/Header.js';
import { ListOfTwentyPokemons } from './components/ListOfTwentyPokemons.js';

// fetchPokemonsPage(0);

let currentPageValue = 0;
new Header('header');
new ButtonNextPage('body');
new ListOfTwentyPokemons('body', currentPageValue);

const main = async () => {
    setTimeout(() => {
        const listOfHTMLPokemonCards =
            document.querySelectorAll('.pokemon__card');

        listOfHTMLPokemonCards.forEach((item) => {
            item.addEventListener('click', () => {
                window.open(`./details.html?${item.id}`);
            });
        });

        const buttonNextPage = document.querySelector('button');

        buttonNextPage?.addEventListener('click', () => {
            const currentPokemonList: any =
                document.querySelector('.pokemon__list');
            currentPokemonList.innerHTML = '';
            currentPageValue++;
            new ListOfTwentyPokemons('body', currentPageValue);
            main();
        });
    }, 200);
};

main();
