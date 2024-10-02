import React from "react";
import { Link } from "react-router-dom";

const DogDetails = ({ dog }) => {
    return (
        <div>
            <h1>{dog.name}</h1>
            <img src={dog.src} alt={dog.name} />
            <h1>Age: {dog.age}</h1>
            <ul>
                {dog.facts.map(fact => <li>{fact}</li>)}
            </ul>
            <Link to='/dogs'>Go Back!</Link>
        </div>
    )
}

export default DogDetails;