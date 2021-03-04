import React, {useEffect, useState} from 'react';
import getDataFromApi from '../service/GetDataFromApi'
import CharacterList from './CharacterList';
import '../App.css';
import bg_image from '../image/Rick_and_Morty_-_logo__English_-removebg-preview.png';


const App = () => {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getDataFromApi().then(data => setCharacters(data))
  }, []);

  return (
    <div className="App-wrap">
      <section className="display_flex-column bg_img">
        <h1>
          <img src={bg_image} alt="Logo Rick and Morty" className="logo_img" />
        </h1>
        <form>
          <div className="display_inline">
            <label className="form__label display-block" htmlFor="name">
              ¿Cuál el nombre de tu personaje?
              </label>
            <input className="form__input-text input" type="text" name="name" id="name" />
          </div>
          <div className="display_inline">
            <label className="form__label display-block" htmlFor="gender">
              Filtra por especie:
              </label>
            <select className="form__input-text" name="species" id="species" >
              <option value="all">Todos</option>
              <option value="Human">Humano</option>
              <option value="Alien">Alien</option>
            </select>
          </div>
        </form>
      </section>
      <CharacterList characters={characters} />
    </div>
  );
};
export default App;