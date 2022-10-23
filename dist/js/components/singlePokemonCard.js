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
        const newTemplate = `
         <div class="pokemon__card" id=${this.singlePokemonData.id}>
            <div><span>${this.singlePokemonData.name} - ${this.singlePokemonData.id}</span></div>
            <div><img src="${this.singlePokemonData.sprites.other.home.front_default} " alt="${this.singlePokemonData.name}"></div>
        </div>
        `;
        return newTemplate;
    }
}
