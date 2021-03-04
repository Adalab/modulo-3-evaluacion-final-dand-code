const FilterBySpecie = props => {

  //Envia valor del input a APP
  const handleChange = (ev) => {
    props.handleFilter({
      key: 'specie',
      value: ev.target.value
    });
} 
    return (
        <div className="display_inline">
        <label className="form__label display-block" htmlFor="specie">
          Filtra por especie:
          </label>
        <select
          className="form__input-text"
          name="specie"
          id="specie"
          onChange={handleChange}>
          <option value="all">Todos</option>
          <option value="Human">Humano</option>
          <option value="Alien">Alien</option>
        </select>
      </div>
    )
  }
  
  export default FilterBySpecie;