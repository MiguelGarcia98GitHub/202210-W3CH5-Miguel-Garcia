import { DetailsPokemonCard } from './components/DetailsPokemonCard.js';
import { Header } from './components/Header.js';

new Header('header');

const currentPokemonID = window.location.search.replace('?', '');

const fetchSinglePokemon = async (pokeapi_id: number | string) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeapi_id}`)
        .then((response) => {
            return response.json();
        })

        .then((data: any) => {
            new DetailsPokemonCard('body', data);
        });
};

new DetailsPokemonCard('body', currentPokemonID);
