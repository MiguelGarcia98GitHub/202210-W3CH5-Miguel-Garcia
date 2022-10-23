export const fetchAllPokemons = async () => {
    fetch('https://pokeapi.co/api/v2/pokemon')
        .then((response) => {
            return response.json();
        })
        .then((data: any) => {});
};
