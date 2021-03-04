const FilterByName = props => {

    console.log(props)
    return (
        <div className="display_inline">
        <label className="form__label display-block" htmlFor="name">
          ¿Cuál el nombre de tu personaje?
          </label>
        <input className="form__input-text input" type="text" name="name" id="name" />
      </div>
    )
  }
  
  export default FilterByName;