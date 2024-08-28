import React from "react";
import './Pokecard.css'
const Pokecard = (props) => {
    let imageSource = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`
    return (
        <div className="Pokecard">
            <h2>{props.name}</h2>
            <img src={imageSource} alt="pokemon"></img>
            <h4>Type: {props.type}</h4>
            <h4>EXP: {props.base_experience}</h4>
        </div>
    );
}

export default Pokecard;