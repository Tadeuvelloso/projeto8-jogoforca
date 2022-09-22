import React from "react";
import ReactDOM from "react-dom";
import "./css/reset.css"
import "./css/style.css"
import forca0 from "./images/forca0.png"
import forca1 from "./images/forca1.png"
import forca2 from "./images/forca2.png"
import forca3 from "./images/forca3.png"
import forca4 from "./images/forca4.png"
import forca5 from "./images/forca5.png"
import forca6 from "./images/forca6.png"
import "./Palavras";


const imagens = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];
const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function Letras(props) {
    return (
        <div className="letra">{props.letra}</div>
    )

}

function App() {
    return (
        <>
            <div className="corpo">
                <img src={forca3} alt="forca" />
                <div className="palavras">
                    <div className="escolher-palavra">Escolher Palavra</div>
                    <div className="palavra-escolhida">Batata</div>
                </div>
            </div>
            <div className="letras">
                {alfabeto.map((l, i) => <Letras key={i} letra={l.toUpperCase()} />)}
            </div>
        </>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"))