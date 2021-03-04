import React, { useEffect, useState } from 'react';
import getDataFromApi from '../service/GetDataFromApi'
import CharacterList from './CharacterList';
import Filters from './Filters';
import FilterByName from './FilterByName';
import '../App.css';



const App = () => {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getDataFromApi().then(data => setCharacters(data))
  }, []);

  return (
    <div className="App-wrap">
      <Filters />
      <CharacterList characters={characters} />
    </div>
  );
};
export default App;