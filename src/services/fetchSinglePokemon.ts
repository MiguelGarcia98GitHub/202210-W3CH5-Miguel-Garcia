export const fetchSinglePokemon = async (pokeapi_id: number | string) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeapi_id}`)
        .then((response) => {
            return response.json();
        })

        .then((data: any) => {});
};
