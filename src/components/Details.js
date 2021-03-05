import React from 'react';
import { Link } from 'react-router-dom';
import bg_image from '../image/Rick_and_Morty_-_logo__English_-removebg-preview.png';

const Details = props => {
    console.log(props);
    return (
        <div className="display_flex-column bg_img">
                <h1>
                    <img src={bg_image} alt="Logo Rick and Morty" className="logo_img" />
                </h1>
                <Link to="/">
                    <p>VOLVER</p>
                </Link>
            <section className="display_grid-detail">
                <img className="card__img" src={props.character.image} alt="Foto personaje" />
                <ul className="card__footer">
                    <li className="card__title">
                        Nombre:{props.character.name}
                    </li>
                    <li className="card__description">
                        Especie:{props.character.specie}
                    </li>
                    <li className="card__description">
                        Origen:{props.character.origin.name}
                    </li>
                    <li className="card__description">
                        Epsodios: {props.character.episode.length}
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