import React from "react";
import { NavLink } from "react-router-dom";


const NavBar = () => {
    return (
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/albums'>Albums</NavLink>
            <NavLink to='/news'>News</NavLink>
        </nav>
    )
}

