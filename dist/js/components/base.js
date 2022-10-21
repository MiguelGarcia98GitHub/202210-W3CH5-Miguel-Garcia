import { Component } from './component.js';
export class Base extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.manageComponent();
    }
    manageComponent() {
        this.template = this.createTemplate();
        this.render(this.selector);
    }
    createTemplate() {
        return `base`;
    }
}
