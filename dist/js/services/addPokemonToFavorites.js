var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export const addPokemonToFavorites = (pokeapi_id) => __awaiter(void 0, void 0, void 0, function* () {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeapi_id ? pokeapi_id : 5}`)
        .then((response) => {
        return response.json();
    })
        .then((data) => {
        console.log(data);
        fetch('http://localhost:3000', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'content-type': 'application/json' },
        });
    });
});
