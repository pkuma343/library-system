import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        
        
        <header>
            <h1>Library System</h1>
            <NavLink to="/libraries">Show Libraries</NavLink>
            <br />
            <br />
            
        </header>
        
    )
}

export default Header;