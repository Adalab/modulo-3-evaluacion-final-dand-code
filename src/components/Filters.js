import FilterByname from './FilterByName';
import FilterBySpecie from './FilterBySpecie';
import bg_image from '../image/Rick_and_Morty_-_logo__English_-removebg-preview.png';

const Filters = props => {
  const handlePreventDefault = (ev) => {
    ev.preventDefault();
  } 
    return (
      <section className="display_flex-column bg_img">
        <h1>
          <img src={bg_image} alt="Logo Rick and Morty" className="logo_img" />
        </h1>
        <form onChange={handlePreventDefault}>
          <FilterByname handleFilter={props.handleFilter}/>
          <FilterBySpecie />
        </form>
      </section>
    )
  }
  
  export default Filters;