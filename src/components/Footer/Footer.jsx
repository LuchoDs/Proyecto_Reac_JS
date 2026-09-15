import "./Footer.css";


export const Footer = () => {
    return (

        <footer>
            <nav className="nav-footer">
                <ul className="footer-list">
                    {/*<li><a 
                        href="https://wa.me/5491159490842?text=Hola, quisiera más información sobre el catálogo" 
                        target="_blank" 
                        rel="noopener noreferrer">
                        <img className="iconitos" src="/images/whatsapp.png" alt="chat en whatsapp"/>Whatsapp</a></li>*/}
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