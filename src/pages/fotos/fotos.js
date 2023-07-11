import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import './styles.css'

function Fotos() {
    return (
        <div>
           <Header/>
            <div class="actor_cards_container">
                <div class="cards_content">
                    <div class="card banner_4"></div>
                    <div class="card banner_5"></div>
                    <div class="card banner_6"> </div>
                    <div class="card banner_7"></div>
                    <div class="card banner_8"></div>
                    <div class="card banner_9"></div>
                </div>

            </div>
           <Footer/>
        </div>
    )

}
export default Fotos;