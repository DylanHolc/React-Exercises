import React from "react";
import Pokecard from "./Pokecard.jsx";
import './Pokedex.css';
const Pokedex = (props) => {
    return (
        <div>
            <h1>Pokedex</h1>
            <div className="Pokedex">
                {props.pokemon.map(p => <Pokecard
                    id={p.id}
                    name={p.name}
                    type={p.type}
                    base_experience={p.base_experience}
                />)}
            </div>

        </div>
    )

}


export default Pokedex;