import { Component } from './Component.js';

export class Base extends Component {
    template!: string;
    constructor(public selector: string) {
        super();
        // this.manageComponent();
    }

    manageComponent() {
        this.template = this.createTemplate();
        this.render(this.selector, this.template);
    }

    createTemplate() {
        return this.template;
    }
}
