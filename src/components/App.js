import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import getDataFromApi from '../service/GetDataFromApi'
import CharacterList from './CharacterList';
import Filters from './Filters';
import Details from './Details';
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

  //Renderiza la pagina de detalles:
  const renderDetail = props => {
    const id = props.match.params.id;
    const selectCharacter = characters.find(character => {
      return character.id == id;
    });
    return <Details character={selectCharacter} />
    
  }
  
  return (
    <div className="App-wrap">
      <Filters handleFilter={handleFilter} />
      <Switch>
        <Route path="/character/:id" render={renderDetail} />
      </Switch>
      <CharacterList characters={filterCharacters} />
      
    </div>
  );
};
export default App;