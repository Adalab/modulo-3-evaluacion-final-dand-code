import { Link } from 'react-router-dom';

const Characters = props => {
  
  return (
    <Link to={`/character/${props.character.id}`}>
      <img className="card__img" src={props.character.image} alt="Foto personaje" />
      <div className="card__footer">
        <h4 className="card__title">{props.character.name}</h4>
        <p className="card__description">
          {props.character.specie}</p>
      </div>

    </Link>
  )
}

export default Characters;