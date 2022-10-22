import { Component } from './Component.js';
export class Header extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.template = this.createTemplate();
        this.renderAdd(this.selector, this.template);
    }
    createTemplate() {
        return `
         <header>
                <div class="logo__container">
                <img src="./pokemon-logo.svg" width="300" height="100" alt="PokeAPI Logo">
                </div>
        </header>
        `;
    }
}
