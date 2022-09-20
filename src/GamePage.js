import forca0 from "../public/images/forca0.png"
import forca1 from "../public/images/forca1.png"
import forca2 from "../public/images/forca2.png"
import forca3 from "../public/images/forca3.png"
import forca4 from "../public/images/forca4.png"
import forca5 from "../public/images/forca5.png"
import forca6 from "../public/images/forca6.png"

const imagens = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];
const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

export default function Game (){
    
    
    return(
        <div className="corpo">
        <img src={forca0} alt="" />
        <div className="letras">
            {alfabeto.map((l) => <div className="letra">l</div> )}
        </div>
        </div>
    )
}