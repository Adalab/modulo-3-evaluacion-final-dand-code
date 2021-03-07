const defaultPage = "https://rickandmortyapi.com/api/character";
const getDataFromApi = (page) => {
    return fetch(page || defaultPage)
        .then((response) => response.json())
        .then((data) => {
            const results = data.results.map(character => {
                return {
                    id: character.id,
                    name: character.name,
                    specie: character.species,
                    image: character.image,
                    episodes: character.episode.length,
                    origin: character.origin.name,
                    status: character.status,
                };
            });
            return {
                results: results,
                prevPage: data.info.prev,
                nextPage: data.info.next
            }
        });
};

export default getDataFromApi;