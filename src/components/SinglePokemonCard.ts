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

        const newTemplate = `
         <div class="pokemon__card" id=${this.singlePokemonData.id}>
            <div><span>${this.singlePokemonData.name} - ${this.singlePokemonData.id}</span></div>
            <div><img src="${this.singlePokemonData.sprites.other.home.front_default} " alt="${this.singlePokemonData.name}"></div>
        </div>
        `;

        return newTemplate;
    }
}
