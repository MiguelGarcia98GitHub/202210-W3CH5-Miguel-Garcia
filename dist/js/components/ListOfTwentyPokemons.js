var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Base } from './Base.js';
export class ListOfTwentyPokemons extends Base {
    constructor(selector, pageID) {
        super(selector);
        this.selector = selector;
        const template = (this.pageID = pageID);
        this.data = [];
        this.fetchPokemonsPage(this.pageID);
    }
    fetchPokemonsPage(pageIndex) {
        return __awaiter(this, void 0, void 0, function* () {
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
                yield this.data.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i === 0 ? 1 : i}`));
            }
            this.data = yield Promise.all(this.data).then((values) => {
                return Promise.all(values.map((r) => r.json()));
            });
            this.renderAdd(this.selector, this.createTemplate1(this.data));
        });
    }
    createTemplate1(data) {
        console.log(data);
        let newTemplate = '<div>';
        data.forEach((item) => {
            newTemplate += `<h3>${item.name}</h3>`;
        });
        newTemplate += '</div>';
        console.log(newTemplate);
        return newTemplate;
    }
}
