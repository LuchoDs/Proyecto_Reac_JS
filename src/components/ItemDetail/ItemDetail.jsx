import "./ItemDetail.css"
import { Item } from "../Item/Item"

export const ItemDetail= ({item}) => { //lo paso entero - total es sólo 1 producto

    return (
        <div className="detail-wrapper">

            <Item {...item}> {/*y aca lo desestructuro para que me arme la tarjeta*/}
                <button className="btn bg-secondary text-dark">Agregar al carrito</button>
                {/*no voy a teber conflictos de eventos del boton con LINK, porque Item quedo afuera del LINK, O SEA, ES UN CHILDREN DE LINK*/}
            </Item>

        </div>
    )
};

