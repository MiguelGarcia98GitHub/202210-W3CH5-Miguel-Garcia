import { get } from 'https';
import { DetailsPokemonCard } from './components/DetailsPokemonCard.js';
import { Header } from './components/Header.js';
import { fetchSinglePokemon } from './services/fetchSinglePokemon.js';

new Header('header');

const currentPokemonID = window.location.search.replace('?', '');
console.log(currentPokemonID);
let data: any;

new DetailsPokemonCard('body', currentPokemonID);

const main = () => {
    // const data = await fetchSinglePokemon(2)
    //     .then((response) => {
    //         return response.json();
    //     })
    //     .then((data) => console.log(data));

    // addPokemonToFavorites = async (pokeapi_id: number | string) => {
    //     fetch(
    //         `https://pokeapi.co/api/v2/pokemon/${pokeapi_id ? pokeapi_id : 5}`
    //     )
    //         .then((response) => {
    //             return response.json();
    //         })

    //         .then((data: any) => {
    //             console.log(data);
    //             fetch('http://localhost:3000', {
    //                 method: 'POST',
    //                 body: JSON.stringify(data),
    //                 headers: { 'content-type': 'application/json' },
    //             });
    //         });
    // };

    setTimeout(() => {
        const HTMLDetailsPokemonCard = document.getElementById(
            `button${currentPokemonID}`
        );

        HTMLDetailsPokemonCard?.addEventListener('click', () => {
            console.log('Clickaste el boton para añadir a favoritos...');
            fetch('http://localhost:3000/pokemons', {
                method: 'POST',
                // body: JSON.stringify({ data }),
                body: JSON.stringify({ data }),
                headers: { 'content-type': 'application/json' },
            });
            console.log('Enviando datos...');
            fetch('http://localhost:3000/pokemons')
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    console.log(data);
                });
        });
    }, 100);
};

main();
