import FilterByname from './FilterByName';
import FilterBySpecie from './FilterBySpecie';


const Filters = props => {
  const handlePreventDefault = (ev) => {
    ev.preventDefault();
  } 
    return (
      <section className="display_flex-column bg_img">
        <form onChange={handlePreventDefault}>
          <FilterByname handleFilter={props.handleFilter}/>
          <FilterBySpecie handleFilter={props.handleFilter} />
        </form>
      </section>
    )
  }
  
  export default Filters;