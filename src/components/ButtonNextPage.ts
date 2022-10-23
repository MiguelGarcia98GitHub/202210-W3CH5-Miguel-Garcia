import { Component } from './Component.js';

export class ButtonNextPage extends Component {
    template: string;
    constructor(public selector: string) {
        super();
        this.template = this.createTemplate();
        this.renderAdd(this.selector, this.template);
    }

    createTemplate() {
        return `
         <button>
                <h1>NEXT PAGE</h1>
        </button>
        `;
    }
}
