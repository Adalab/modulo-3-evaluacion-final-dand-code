import FilterByname from './FilterByName';
import FilterBySpecie from './FilterBySpecie';
import bg_image from '../image/Rick_and_Morty_-_logo__English_-removebg-preview.png';

const Filters = props => {

    return (
      <section className="display_flex-column bg_img">
        <h1>
          <img src={bg_image} alt="Logo Rick and Morty" className="logo_img" />
        </h1>
        <form>
          <FilterByname />
          <FilterBySpecie />
        </form>
      </section>
    )
  }
  
  export default Filters;