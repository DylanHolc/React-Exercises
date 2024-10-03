import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const ColorHome = () => {
    const location = useLocation();
    const initialState = [{ name: 'red', color: '#e3160b' }, { name: 'blue', color: '#0b45e3' }, { name: 'yellow', color: '#e3e30b' }]
    const [colors, setColors] = useState(initialState);
    useEffect(function loadColors() {
        if (location.state) {
            setColors(location.state.colors);
        }
    },);

    return (
        <div>
            <h1>Welcome to the Color Factory!</h1>
            <Link to='/colors/new' state={colors}>Add a Color</Link>
            <h2>Please Select a Color</h2>
            <ul>
                {colors.map(color => <li key={color.name}><Link to={`/colors/${color.name.toLowerCase()}`} state={colors}>{[color.name]}</Link></li>)}
            </ul>
        </div>
    )
}


export default ColorHome;