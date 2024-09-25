import React from "react";
import { Link } from "react-router-dom";
const VendingMachine = () => {
    return (
        <div>
            <h1>Welcome to my vending machine!!!</h1>
            <h2>Select an item from the options below</h2>
            <Link to={'/soda'}>Soda</Link>
            <Link to={'/cookie'}>Cookie</Link>
            <Link to={'/candy'}>Candy</Link>
            <Link to={'/chips'}>Chips</Link>
        </div>
    )
}

export default VendingMachine;