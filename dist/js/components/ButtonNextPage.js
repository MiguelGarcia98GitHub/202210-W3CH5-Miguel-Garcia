import { Component } from './Component.js';
export class ButtonNextPage extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
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
