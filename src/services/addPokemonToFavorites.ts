export const addPokemonToFavorites = async (pokeapi_id: number | string) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeapi_id}`)
        .then((response) => {
            return response.json();
        })

        .then((data: any) => {
            console.log(data);
            fetch('http://localhost:3000', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'content-type': 'application/json' },
            });
        });
};
