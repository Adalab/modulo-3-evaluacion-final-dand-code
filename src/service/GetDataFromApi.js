
const getDataFromApi = () => {
    return fetch('https://rickandmortyapi.com/api/character')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            return data.results.map(character => {
                return {
                    id: character.id,
                    name: character.name,
                    specie: character.species,
                    image: character.image,
                };
            });
        });
};

export default getDataFromApi;