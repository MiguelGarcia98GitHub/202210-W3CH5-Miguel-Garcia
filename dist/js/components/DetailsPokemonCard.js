var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Base } from './Base.js';
export class DetailsPokemonCard extends Base {
    constructor(selector, data) {
        super(selector);
        this.selector = selector;
        this.data = data;
        this.fetchSinglePokemon();
    }
    fetchSinglePokemon() {
        return __awaiter(this, void 0, void 0, function* () {
            'http://127.0.0.1:5500/dist/details.html?24'.replace('http://127.0.0.1:5500/dist/details.html?', '');
            ;
            const currentPokemonID = window.location.search.replace('?', '');
            yield fetch(`https://pokeapi.co/api/v2/pokemon/${currentPokemonID}`)
                .then((response) => {
                return response.json();
            })
                .then((data) => {
                this.data = data;
            });
            this.renderAdd(this.selector, this.createTemplate1(this.data));
        });
    }
    createTemplate1(data) {
        const newTemplate = `
         <div class="pokemon__card__details" id="details${data.id}">
         <h1>${data.name}</h1>
          <div class="pokemon__card__img"><img src="${data.sprites.other.home.front_default}" alt="${data.name}"></div>
            <div><span>${data.stats[0].stat.name}: ${data.stats[0].base_stat}</span></div>
            <div><span>${data.stats[1].stat.name}: ${data.stats[1].base_stat}</span></div>
            <div><span>${data.stats[2].stat.name}: ${data.stats[2].base_stat}</span></div>
            <div><span>${data.stats[3].stat.name}: ${data.stats[3].base_stat}</span></div>
            <button id="button${data.id}">Add Pokemon To Favorites</button>
        </div>
        `;
        return newTemplate;
    }
}
