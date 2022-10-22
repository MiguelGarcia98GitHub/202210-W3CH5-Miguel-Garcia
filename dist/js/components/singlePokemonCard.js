import { Base } from './Base.js';
export class SinglePokemonCard extends Base {
    constructor(selector) {
        super(selector);
        this.selector = selector;
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
