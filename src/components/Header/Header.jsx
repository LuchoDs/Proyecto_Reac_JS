import "./Header.css"
import {Nav} from "../Nav/Nav"

export const Header = () => {
    
    return (
        <header>
            <div><a>
                <img className="logo" src= "/images/FONDO SEVINA LETRAS BLANCAS.png" alt = "logo de la tienda"/></a>
            </div>

            <Nav/>
        </header>
    )
}