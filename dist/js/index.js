var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ButtonNextPage } from './components/ButtonNextPage.js';
import { Header } from './components/Header.js';
import { ListOfTwentyPokemons } from './components/ListOfTwentyPokemons.js';
// fetchPokemonsPage(0);
let currentPageValue = 0;
new Header('header');
new ButtonNextPage('body');
new ListOfTwentyPokemons('body', currentPageValue);
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    setTimeout(() => {
        const listOfHTMLPokemonCards = document.querySelectorAll('.pokemon__card');
        listOfHTMLPokemonCards.forEach((item) => {
            item.addEventListener('click', () => {
                window.open(`./details.html?${item.id}`);
            });
        });
        const buttonNextPage = document.querySelector('button');
        buttonNextPage === null || buttonNextPage === void 0 ? void 0 : buttonNextPage.addEventListener('click', () => {
            const currentPokemonList = document.querySelector('.pokemon__list');
            currentPokemonList.innerHTML = '';
            currentPageValue++;
            new ListOfTwentyPokemons('body', currentPageValue);
            main();
        });
    }, 200);
});
main();
