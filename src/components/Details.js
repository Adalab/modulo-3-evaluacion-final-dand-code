import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Details = props => {
    return (
        <div className="App-wrap2">
             <Link to="/">
            <div className="div-back">
                <i className="fa fa-times back_link" aria-hidden="true"></i>
            </div>
            </Link>
            <section className="display_grid-detail">
                <img className="card__img-detail" src={props.character.image} alt="Foto personaje" />
                
                <ul className="card__footer detail__content">
                    <li className="card__title">
                        {props.character.name}
                    </li>
                    <li className="card__description">
                        Especie:{props.character.specie}
                    </li>
                    <li className="card__description">
                        Origen:{props.character.origin}
                    </li>
                    <li className="card__description">
                        Epsodios: {props.character.episodes}
                    </li>
                    <li className="card__description">
                        Status: {props.character.status}
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default Details;