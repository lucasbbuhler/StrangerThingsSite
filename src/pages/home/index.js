import React from "react";
import Header from "../../components/header/header"
import Cards from "../../components/cards/cards"
import './styles.css'
import Footer from "../../components/footer/footer";
import { Link } from "react-router-dom";

function Home() {        
    return (
        <>
        <Header/>
            <div id='banner'/>  
            <div id='trailer_container'>
                <div className="content">
                  <iframe id="trailer_container" src="https://www.youtube.com/embed/yXnk3n-qNrI" title="Stranger Things 4 | Eddie Munson&#39;s Upside Down Guitar Scene | Netflix" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
                    <div id="sinopse">
                        <p class="description">
                            Uma nova ameaça do Mundo Invertido surge para romper a linha tênue que separa a realidade humana da dimensão sombria habitada pelos Demogorgons.
                            Para isso, Vecna deve assassinar quatro crianças e adolescentes de Hawkins, abrindo o portal que dá acesso às criaturas do mundo invertido a Hawkins.
                        </p>
                        <Link style={{ textDecoration: 'none' }} to={'https://www.netflix.com/br/title/80057281'}>
                        <button class="button">Assista já</button>
                        </Link>
                    </div>
                </div>
           </div> 
        <Cards/>  
        <Footer/>       
        </>
    )

}
export default Home;