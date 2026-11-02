import "./Header.css"
import {Nav} from "../Nav/Nav"
import { Link } from 'react-router-dom'; 

export const Header = () => {
    
    return (
        <header>
            <div>
                <Link to="/"> {/*className="logo-text"*/}
                    <img className="logo" src= "/images/LG.png" alt = "logo LG"/>
                    {/*<span className="sevina">SEVINA</span>*/}
                </Link>
            </div>

            <Nav/>
        </header>
    )
}