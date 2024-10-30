import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <NavLink to={'/'}>Jobly</NavLink>
            <NavLink to={'/login'}>Login</NavLink>
            <NavLink to={'/signup'}>Sign Up</NavLink>
        </nav>
    );
}

export default Navbar;