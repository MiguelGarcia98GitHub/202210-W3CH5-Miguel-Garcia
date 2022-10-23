var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Header } from './components/Header.js';
import { ListOfFavouritePokemons } from './components/ListOfFavouritePokemons.js';
// fetchPokemonsPage(0);
new Header('header');
new ListOfFavouritePokemons('body');
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    setTimeout(() => {
        const listOfHTMLCards = document.querySelectorAll('.pokemon__card');
        listOfHTMLCards.forEach((item) => item.addEventListener('click', () => {
            fetch(`http://localhost:3000/pokemons/${item.id}`, {
                method: 'DELETE',
            });
        }));
    }, 150);
});
main();
