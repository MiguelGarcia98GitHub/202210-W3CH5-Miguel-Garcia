import { Base } from './Base.js';

export class DetailsPokemonCard extends Base {
    template: any;

    constructor(public selector: string, public data: string) {
        super(selector);
        this.fetchSinglePokemon();
    }

    async fetchSinglePokemon() {
        console.log(
            'http://127.0.0.1:5500/dist/details.html?24'.replace(
                'http://127.0.0.1:5500/dist/details.html?',
                ''
            )
        );
        const currentPokemonID = window.location.search.replace('?', '');

        await fetch(`https://pokeapi.co/api/v2/pokemon/${currentPokemonID}`)
            .then((response) => {
                return response.json();
            })

            .then((data: string) => {
                this.data = data;
            });

        this.renderAdd(this.selector, this.createTemplate1(this.data));
    }

    createTemplate1(data: any) {
        console.log(data);

        const newTemplate = `
         <div class="pokemon__card__details" id="">
         <h1>${data.name}</h1>
          <div class="pokemon__card__img"><img src="${data.sprites.other.home.front_default}" alt="${data.name}"></div>
            <div><span>${data.stats[0].stat.name}: ${data.stats[0].base_stat}</span></div>
            <div><span>${data.stats[1].stat.name}: ${data.stats[1].base_stat}</span></div>
            <div><span>${data.stats[2].stat.name}: ${data.stats[2].base_stat}</span></div>
            <div><span>${data.stats[3].stat.name}: ${data.stats[3].base_stat}</span></div>
            <button id="button${data.id}">Add Pokemon To Favorites</button>
        </div>
        `;

        console.log(data.id);

        return newTemplate;
    }
}
