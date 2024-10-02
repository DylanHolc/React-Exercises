import React from "react";
import { Link } from "react-router-dom";

const DogList = ({ dogs }) => {
    return (
        <div>
            <h1>Check Out Our Dogs!!!</h1>
            {dogs.map(d => (
                <div key={d.name}>
                    <img src={`../public/${d.name.toLowerCase()}.jpg`} alt={d.name} />
                    <h2><Link to={`/dogs/${d.name.toLowerCase()}`}>{d.name}</Link></h2>
                </div>
            ))}
        </div>
    )
}

export default DogList;
