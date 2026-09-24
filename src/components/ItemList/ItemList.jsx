import { Item } from "../Item/Item";
import "./ItemList.css";
import { Link } from "react-router-dom";


export const ItemList = ({products}) => {

    if (!products.length) {
        return <p>No hay productos para cargar</p>
    }

    return (
      <div className="contenedor-tarjetas"> 
        {products.map((product) => (
            <Link to={`/product/${product.id}`} className="id-link" key = {product.id}>
                <Item {...product}/>

            </Link>
            //uso Link afuera para evitar conflictos con eventos de boton  
        ))}
        </div>
    );
};

{/*return (
    <div className="contenedor-tarjetas"> 
        {products.map((product) => (
         <Item key = {product.id}{...product}/> //Acá debo meter el link para evitar conflictos con eventos de boton si uso children para un boton o etc 
        ))}
    </div>*/}