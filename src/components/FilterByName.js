const FilterByName = props => {

    //Send input value to APP.
    const handleChange = (ev) => {
        props.handleFilter({
            key: 'name',
            value: ev.target.value
        })
    } 
    return (
        <div className="display_inline">
            <label className="form__label display-block" htmlFor="name">
                ¿Cuál el nombre de tu personaje?
          </label>
            <input
                className="form__input-text input"
                type="text"
                name="name"
                id="name"
                onChange={handleChange} />
        </div>
    )
}

export default FilterByName;