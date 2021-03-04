import React, { useEffect, useState } from 'react';
import getDataFromApi from '../service/GetDataFromApi'
import CharacterList from './CharacterList';
import Filters from './Filters';
import '../App.css';



const App = () => {
  const [characters, setCharacters] = useState([]);
  const [nameInput, setNameInput] = useState('');
  const [specieInput, setSpecieInput] = useState('');

// Recibimos los datos desde API
  useEffect(() => {
    getDataFromApi().then(data => setCharacters(data))
  }, []);

  // Actualizamos el valor de los estados
  const handleFilter = (valueInput) => {
    if (valueInput.key === 'name') {
      setNameInput(valueInput.value)
    } else if (valueInput.key === 'specie') {
      setSpecieInput(valueInput.value)
    }
  }
// A partir del nuevo valor del estado, filtramos los personajes
  const filterCharacters = characters.filter(character =>{return character.name.toUpperCase().includes(nameInput.toUpperCase())});


  return (
    <div className="App-wrap">
      <Filters handleFilter={handleFilter} />
      <CharacterList characters={filterCharacters} />
    </div>
  );
};
export default App;