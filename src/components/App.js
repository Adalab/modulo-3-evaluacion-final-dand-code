import React, { useEffect, useState } from 'react';
import getDataFromApi from '../service/GetDataFromApi'
import CharacterList from './CharacterList';
import Filters from './Filters';
import '../App.css';



const App = () => {
  const [characters, setCharacters] = useState([]);
  const [nameState, setNameState] = useState('');
  const [specieState, setSpecieState] = useState('all');

// Recibimos los datos desde API
  useEffect(() => {
    getDataFromApi().then(data => setCharacters(data))
  }, []);

  // Actualizamos el valor de los estados
  const handleFilter = (valueInput) => {
    if (valueInput.key === 'name') {
      setNameState(valueInput.value);
    } else if (valueInput.key === 'specie') {
      setSpecieState(valueInput.value);
    }
  }
// A partir del nuevo valor del estado, filtramos los personajes
  const filterCharacters = characters.filter(character => { return character.name.toUpperCase().includes(nameState.toUpperCase()) }).filter(character => {
    return specieState === 'all' ? true : character.specie === specieState;
  });


  return (
    <div className="App-wrap">
      <Filters handleFilter={handleFilter} />
      <CharacterList characters={filterCharacters} />
    </div>
  );
};
export default App;