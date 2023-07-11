import React from "react";
import {Link} from "react-router-dom";
import './styles.css';
import Logo from '../../assets/logo-stranger-things.png'

function Header() {

    return(
        <header>
            <Link to='/'><img id="logo" src={Logo} /></Link>
            <nav>
                <ul>
                    <Link style={{textDecoration: 'none'}} to='/'>
                        <li>Home</li>
                    </Link>

                    <Link style={{ textDecoration: 'none' }} to='/contato'>
                        <li>Contato</li> 
                    </Link>

                    <Link style={{ textDecoration: 'none' }} to='/fotos'>
                        <li>Fotos</li>
                    </Link>

                </ul>
            </nav>        
        </header>
    )    
}

export default Header;