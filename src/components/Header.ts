import { Component } from './Component.js';

export class Footer extends Component {
    template: string;
    constructor(public selector: string) {
        super();
        this.template = this.createTemplate();
        this.renderAdd(this.selector, this.template);
    }
    createTemplate() {
        return `
         <header>
            <h1>HEADER</h1>
        </header>
        `;
    }
}
