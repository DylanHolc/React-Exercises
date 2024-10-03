import React from "react";
import { useParams, Link, useLocation, Navigate } from "react-router-dom";

const Color = () => {
    const { color } = useParams();
    const location = useLocation();
    const colors = location.state;
    // console.log(colors.find(c => c.name.toLowerCase() === color))
    if (colors === null) {
        return (
            <Navigate to={'/colors'} />
        )
    }
    return (
        <div style={{ backgroundColor: `${color}`, height: '100vh' }} >
            <h1>THIS IS {color.toUpperCase()}</h1>
            <h1>ISN'T IT BEAUTIFUL</h1>
            <Link to={'/colors'} state={{ colors }}>GO BACK</Link>

        </div >
    )
}

export default Color;