import { fetchSinglePokemon } from '../services/fetchSinglePokemon.js';
import { Base } from './Base.js';

export class SinglePokemonCard extends Base {
    template: string;
    constructor(public selector: string) {
        super(selector);
        this.template = this.createTemplate();
        this.renderAdd(this.selector, this.template);
    }

    createTemplate() {
        return `
         <div>
            <h1>SinglePokemonCard Component</h1>
        </div>
        `;
    }
}
