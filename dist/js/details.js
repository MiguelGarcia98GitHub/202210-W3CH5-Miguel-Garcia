var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { DetailsPokemonCard } from './components/DetailsPokemonCard.js';
import { Header } from './components/Header.js';
console.log('Loaded details.js');
new Header('header');
const currentPokemonID = window.location.search.replace('?', '');
// console.log(currentPokemonID);
let pokemonData;
new DetailsPokemonCard('body', currentPokemonID);
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const getPokemonData = yield fetch(`https://pokeapi.co/api/v2/pokemon/${currentPokemonID}`);
    const pokemonData = yield getPokemonData.json();
    console.log(pokemonData);
    const addToFavoritesHTMLButton = document.getElementById(`button${currentPokemonID}`);
    addToFavoritesHTMLButton === null || addToFavoritesHTMLButton === void 0 ? void 0 : addToFavoritesHTMLButton.addEventListener('click', () => {
        fetch('http://localhost:3000/pokemons', {
            method: 'POST',
            body: JSON.stringify(pokemonData),
            headers: { 'content-type': 'application/json' },
        });
    });
});
main();
