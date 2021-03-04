const FilterBySpecie = props => {

    console.log(props)
    return (
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
    )
  }
  
  export default FilterBySpecie;