import React from "react";
import "./styles.css"
import Logo from "../../assets/logo-stranger-things.png"
import { Link } from "react-router-dom";


function Footer(){

    return(
        <footer>
            <Link to='/'><img id="logo" src={Logo}/></Link>
            <span>Todos os direitos reservados © </span>
            <span>Desenvolvido por: Lucas Bühler</span>

            <nav className="footer_navigation">
                <ul className="footer_list">
                    <Link style={{ textDecoration: 'none' }} to='/'>
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
        </footer>
    )
}

export default Footer;