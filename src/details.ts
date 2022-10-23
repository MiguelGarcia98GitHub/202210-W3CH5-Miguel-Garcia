import { DetailsPokemonCard } from './components/DetailsPokemonCard.js';
import { Header } from './components/Header.js';

console.log('Loaded details.js');

new Header('header');

const currentPokemonID = window.location.search.replace('?', '');
// console.log(currentPokemonID);
let pokemonData: any;

new DetailsPokemonCard('body', currentPokemonID);

const main = async () => {
    const getPokemonData = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${currentPokemonID}`
    );
    const pokemonData = await getPokemonData.json();
    console.log(pokemonData);
    const addToFavoritesHTMLButton = document.getElementById(
        `button${currentPokemonID}`
    );
    addToFavoritesHTMLButton?.addEventListener('click', () => {
        fetch('http://localhost:3000/pokemons', {
            method: 'POST',
            body: JSON.stringify(pokemonData),
            headers: { 'content-type': 'application/json' },
        });
    });
};

main();
