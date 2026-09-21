import "./ItemCategory.css"
import { Item } from "../Item/Item"
import { Link } from "react-router-dom";

export const ItemCategory = ({itemCategory}) => {

    if(!itemCategory.length) {
        return <p>NO hay productos en esta categoria</p>
    }

    return (
        <div className="contenedor-tarjetas-categorias">
        
        {itemCategory.map((item) => (
            <Link to = {`/product/${item.id}`} className="id-link" key = {item.id}>
                <Item {...item}> {/*aca desestructuro la variable para que Item me arme la tarjeta*/}
                    {/*para poner el boton dentro de la tarjeta sin problemas del click para detalle y agregar al carrito*/}
                    <button onClick={(e) => {
                        console.log("boton clickeado");
                         e.preventDefault(); //Evita que el navegador recargue la pagina tomando a Link como un <a>.!!
                         e.stopPropagation();
                        }} className="btn bg-secondary text-dark">Agregar al carrito</button>
                    {/*uso evento de detener la propagacion del evento click, con una funcion flecha y su sintasix*/}
                    {/*stopPropagation evita que el evento suba y active los listeners de los elementos padres"*/}
                </Item>
            </Link>
    ))}
        </div>
    ) 
    
}

