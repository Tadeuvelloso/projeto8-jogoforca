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
import palavras from "./Palavras";


const imagens = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];
const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


function App() {
    const [interruptor, setInterruptor] = React.useState(false)
    const [contador, setContador] = React.useState(0)
    const [initial, setinitial] = React.useState("initial");
    const [palavra, setpalavra] = React.useState([]);
    const [gabarito, setGabarito] = React.useState("");
    const [foto, setFoto] = React.useState(imagens[contador]);
    const [resultado, setResultado] = React.useState("palavra-escolhida")
    const [palpite, setPalpite] = React.useState("")
    const [letras, setLetras] = React.useState([])

    function iniciarJogo() {
        setinitial("")
        setContador(0)
        setFoto(imagens[0])
        setLetras([])
        setResultado("palavra-escolhida")
        let palavra = palavras[Math.floor(Math.random() * palavras.length)];
        console.log(palavra)
        let palavraLista = palavra.split("")

        setGabarito(palavraLista);

        let palavraOculta = palavraLista.map((l) => `_ `)

        setpalavra(palavraOculta)
    }

    function temLetra(l) {
        if(interruptor){return}
        if(letras.includes(l)){return}
        if(initial === "initial"){return}

        setLetras([...letras, l])

        let indices = []
        let idx = gabarito.indexOf(`${l}`)

        while (idx !== -1) {
            indices.push(idx)
            idx = gabarito.indexOf(`${l}`, idx + 1)
        }

        if (indices.length === 0) {
            setContador(contador + 1)
            setFoto(imagens[contador + 1])
            if (contador >= 5) { 
                setpalavra(gabarito)
                setResultado("palavra-escolhida red")
                setInterruptor(true)
             }
        }

        let arrayLetras = [...palavra];
        
        if (gabarito.includes(l)) {
            for (let i = 0; i < indices.length; i++) {
                arrayLetras[indices[i]] = l
                
            }
            setpalavra(arrayLetras)
        }

        if(!arrayLetras.includes("_ ")){
            setResultado("palavra-escolhida green")
            setInterruptor(true)
        }
    }

    function chute (){
        if(contador >= 6){return}
        setPalpite("")

        if(gabarito.join("") === palpite){
            setResultado("palavra-escolhida green")
            setpalavra(gabarito)
            setInterruptor(true)
        } else {
            setContador(contador + 1)
            setFoto(imagens[contador + 1])
        }
    }

    return (
        <>
            <div className="corpo">
                <img src={foto} alt="forca" />
                <div className="palavras">
                    <div className="escolher-palavra" onClick={iniciarJogo}>Escolher Palavra</div>
                    <div className={resultado}>{palavra}</div>
                </div>
            </div>
            <div className={initial}>
                <div className="letras">
                    {alfabeto.map((l, i) => <div key={i} className={letras.includes(l) ? "letra initial": "letra"} onClick={() => temLetra(l)}>{l}</div>)}
                </div>
                <div className="input">
                    <p>Já sei a palavra!</p>
                    <input placeholder="Digite aqui..." value={palpite} onChange={p => setPalpite(p.target.value)} type="text"></input>
                    <button onClick={chute} >Chutar</button>
                </div>
            </div>
        </>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"))