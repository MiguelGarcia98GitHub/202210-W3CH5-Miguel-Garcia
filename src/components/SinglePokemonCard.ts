import { fetchSinglePokemon } from '../services/fetchSinglePokemon.js';
import { Base } from './Base.js';

export class SinglePokemonCard extends Base {
    template: string;
    constructor(
        public selector: string,
        public singlePokemonData: any,
        public ID: number
    ) {
        super(selector);

        this.ID = ID;
        this.template = this.createTemplate();
        // this.HTMLElement = document.getElementById(`${this.ID}`);
        this.renderAdd(this.selector, this.template);
    }

    createTemplate() {
        console.log(this.ID);
        console.log(this.singlePokemonData);

        const newTemplate = `
         <div class="pokemon__card" id=${this.ID}>
            <div><span>${this.singlePokemonData.name}</span></div>
            <div><img src="${this.singlePokemonData.sprites.other.home.front_default} " alt="${this.singlePokemonData.name}"></div>
        </div>
        `;

        return newTemplate;
    }
}
