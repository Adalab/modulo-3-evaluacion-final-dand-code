import React, {useEffect, useState} from 'react';
import getDataFromApi from '../service/GetDataFromApi'
import CharacterList from './CharacterList';


const App = () => {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getDataFromApi().then(data => setCharacters(data))
  }, []);

  return (
    <>
      <section>
        <h1 className="title--big">Rick and Morty</h1>
        <form>
          <label className="form__label display-block" htmlFor="name">
            ¿Cuál el nombre de tu personaje?
            </label>
          <input className="form__input-text" type="text" name="name" id="name" />
          <label className="form__label display-block" htmlFor="gender">
            Filtra por especie:
            </label>
          <select className="form__input-text" name="species" id="species" >
            <option value="all">Todos</option>
            <option value="Human">Humano</option>
            <option value="Alien">Alien</option>
          </select>
          <label className="form__label display-block" htmlFor="gender">
            Ciudad:
            </label>
        </form>
      </section>
      <CharacterList characters={characters}/>
    </>
  );
};
export default App;