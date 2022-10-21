import { Component } from './Component.js';

export class SinglePokemonCard extends Component {
    template: string;
    constructor(public selector: string) {
        super();
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
