import { Component } from './Component.js';
export class Base extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
    }
    createTemplate() {
        return this.template ? this.template : '';
    }
}
