import { Component } from './Component.js';

export class Header extends Component {
    template: string;
    constructor(public selector: string) {
        super();
        this.template = this.createTemplate();
        this.renderAdd(this.selector, this.template);
    }
    createTemplate() {
        return `
         <header>
                <div class="logo__container">

                <img src="./pokemon-logo.svg" width="300" height="100" alt="PokeAPI Logo">
                </div>
                <div>
                <a href="./index.html">HOME</a>
                <a href="./favorites.html">FAVOURITES</a>
                </div>
        </header>
        `;
    }
}
