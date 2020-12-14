import React from 'react';
import Logo from '../logo-chlorine.svg';

const Header = () => {
    return(
        <header class="top-fixed bg-header">
            <nav class="nav-header">
                <img class="logo" src={Logo} alt="logo"></img>
                <button type="button" class="btn btn-outline-danger">Cerrar Sesión</button>
            </nav>
        </header>
    );
}
export default Header;