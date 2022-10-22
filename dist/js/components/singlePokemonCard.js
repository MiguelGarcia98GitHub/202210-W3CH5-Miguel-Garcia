import { Base } from './Base.js';
export class SinglePokemonCard extends Base {
    constructor(selector, singlePokemonData) {
        super(selector);
        this.selector = selector;
        this.singlePokemonData = singlePokemonData;
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
