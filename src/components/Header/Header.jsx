import "./Header.css"
import {Nav} from "../Nav/Nav"
import { Link } from 'react-router-dom'; 

export const Header = () => {
    
    return (
        <header>
            <div>
                <Link to="/"> {/*className="logo-text"*/}
                    <img className="logo" src= "/images/FONDO SEVINA LETRAS BLANCAS.png" alt = "logo Sevina"/>
                    {/*<span className="sevina">SEVINA</span>*/}
                </Link>
            </div>

            <Nav/>
        </header>
    )
}