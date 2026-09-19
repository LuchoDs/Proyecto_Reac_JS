import "./Footer.css";


export const Footer = () => {
    return (

        <footer>
            <nav className="nav-footer">
                <ul className="footer-list">
                    <li><p className="leyenda">Visitanos en nuestras redes</p></li>  
                    
                    <li><a 
                        href="https://www.facebook.com/sevina.comision" target="_blank" rel="noopener noreferrer">
                        <img className="iconitos" src="/images/facebook.png" alt="icono facebook"/>Facebook</a></li>   
                    
                    <li><a 
                        href="https://www.instagram.com/sevinasindicato/" target="_blank" rel="noopener noreferrer">
                        <img className="iconitos" src="/images/instagram.png" alt="icono instagram"/>Instagram</a></li>            
                    
                    <li><a 
                        href="https://x.com/SindicatoSevina" target="_blank" rel="noopener noreferrer">
                        <img className="iconitos" src="/images/red_x.png" alt="icono red X"/>Red X</a></li>   

                </ul>
            </nav>
                        
            <p className="leyenda">Sitio creado por Lucho Ds para SEVINA - CoPESe</p>
        </footer>
    );
}