import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import "./styles.css"

function Contato() {
 

    return (
         <>
        <Header />
        <div>
            <h1 id="contato">Entre em contato conosco</h1>
            <input id="name_insert" placeholder="Seu nome" />
            <select>
                <option value="">Pais...</option>
                <option value="A">Brasil</option>
                <option value="B">Canada</option>
                <option value="C">EUA</option>
            </select>
            <textarea placeholder="Sua mensagem" />
            <button class="button">Enviar</button>
        </div>
        <Footer />
        </>

        
   );    

}
export default Contato;