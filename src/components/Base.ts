import { Component } from './Component.js';

export class Base extends Component {
    template!: string;
    constructor(public selector: string) {
        super();
    }

    createTemplate() {
        return this.template ? this.template : '';
    }
}
