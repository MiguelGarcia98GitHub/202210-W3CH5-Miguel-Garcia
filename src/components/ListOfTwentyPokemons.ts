import { Base } from './Base.js';
import { SinglePokemonCard } from './SinglePokemonCard.js';

export class ListOfTwentyPokemons extends Base {
    template: any;
    pageID: number;
    data: any;
    constructor(public selector: string, pageID: number) {
        super(selector);
        this.pageID = pageID;
        this.data = [];
        this.fetchPokemonsPage(this.pageID);
    }

    async fetchPokemonsPage(pageIndex: number) {
        let pageLimit = 0;
        let pageOffset = 0;

        if (pageIndex === 0) {
            pageOffset = 0;
            pageLimit = 20;
        }

        if (pageIndex === 1) {
            pageOffset = 20;
            pageLimit = 40;
        }

        if (pageIndex > 1) {
            pageOffset = pageIndex * 20;
            pageLimit = pageOffset + 20;
        }

        if (pageOffset === 0) {
            pageOffset = 1;
            pageLimit++;
        }

        for (let i = pageOffset; i < pageLimit; i++) {
            await this.data.push(
                fetch(`https://pokeapi.co/api/v2/pokemon/${i === 0 ? 1 : i}`)
            );
        }

        this.data = await Promise.all(this.data).then((values) => {
            return Promise.all(values.map((r) => r.json()));
        });

        this.renderAdd(this.selector, this.createTemplate1(this.data));
    }

    createTemplate1(data: any) {
        console.log(data);

        data.forEach((item: any) => {
            new SinglePokemonCard('.pokemon__list', item);
        });

        return '';
    }
}
