import { fetchSinglePokemon } from '../services/fetchSinglePokemon.js';
import { Base } from './Base.js';

export class SinglePokemonCard extends Base {
    template: string;
    constructor(public selector: string, public singlePokemonData: any) {
        super(selector);
        this.template = this.createTemplate();
        this.renderAdd(this.selector, this.template);
    }

    createTemplate() {
        console.log(this.singlePokemonData);
        return `
         <div class="pokemon__card">
            <div><span>${this.singlePokemonData.name}</span></div>
            
            <div><img src="${this.singlePokemonData.sprites.other.home.front_default} " alt="${this.singlePokemonData.name}"></div>
        </div>
        `;
    }
}
