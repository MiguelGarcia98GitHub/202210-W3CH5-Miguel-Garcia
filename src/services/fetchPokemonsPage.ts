export const fetchPokemonsPage = async (pageIndex: number) => {
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

    console.log(`pageLimit: ${pageLimit}`);
    console.log(`pageOffset: ${pageOffset}`);

    const arrayOfPromises = [];

    if (pageOffset === 0) {
        pageOffset = 1;
        pageLimit++;
    }

    for (let i = pageOffset; i < pageLimit; i++) {
        await arrayOfPromises.push(
            fetch(`https://pokeapi.co/api/v2/pokemon/${i === 0 ? 1 : i}`)
        );
    }

    const arrayOfResolvedPromises = await Promise.all(arrayOfPromises).then(
        (values) => {
            return Promise.all(values.map((r) => r.json()));
        }
    );

    console.log(arrayOfResolvedPromises);
};
