import { Item } from "../Item/Item"
import "./ItemList.css"

export const ItemList = ({products}) => {

    if (!products.length) {
        return <p>No hay productos para cargar</p>
    }

    return (
      <div className="contenedor-tarjetas"> 
        {products.map((product) => (
            <Item key = {product.id}{...product}/> //Acá meter el link para evitar conflictos con eventos de boton si uso children      
        ))}
        </div>
    );
};