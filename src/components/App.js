import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import getDataFromApi from '../service/GetDataFromApi'
import CharacterList from './CharacterList';
import Filters from './Filters';
import Details from './Details';
import Nav from './Navigator';
import '../style/App.css';

import bg_image from '../image/logo.png';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [nameState, setNameState] = useState('');
  const [specieState, setSpecieState] = useState('all');
  const [prevPage, setPrevPage] = useState();
  const [nextPage, setNextPage] = useState();
  const [page, setPage] = useState(2);

// Recibimos los datos desde API
  useEffect(() => {
    getDataFromApi().then(data => setDataCharacters(data))
  }, []);
  

  const setDataCharacters = (data) => { 
    setCharacters(data.results);
    setPrevPage(data.prevPage);
    setNextPage(data.nextPage);
  }
  
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

  const goNextPage = () => { 
    getDataFromApi(nextPage).then(data => setDataCharacters(data))
  }

  const goPrevPage = () => { 
    getDataFromApi(prevPage).then(data => setDataCharacters(data))
  }

  // const goToPage = () => { 
  //   setPage();
  //   getDataFromApi(page).then(data => setCharacters(data))
  // }

  //Renderiza la pagina de detalles:
  const renderDetail = props => {
    const id = parseInt(props.match.params.id);
    const selectCharacter = characters.find(character => {
      return character.id === id;
    });
    return <Details character={selectCharacter} />
    
  }
  
  return (
    <div className="App-wrap">
      <header className="header">
          <img src={bg_image} alt="Logo Rick and Morty" className="logo_img" />
      </header>
      <main>
      <Switch>
        <Route exact path="/">
          <Filters handleFilter={handleFilter} />
            <Nav
              nextPage={goNextPage}
              prevPage={goPrevPage}
              firstPage={prevPage == null}
              lastPage={nextPage == null}
            />
          <CharacterList characters={filterCharacters} />
        </Route>
        <Route path="/character/:id" render={renderDetail} />
        </Switch>
      </main>
      <footer className="footer">
        <span>Evaluación Final - Modulo 3 - Dandara Almeida</span>
      </footer>
    </div>
  );
};
export default App;