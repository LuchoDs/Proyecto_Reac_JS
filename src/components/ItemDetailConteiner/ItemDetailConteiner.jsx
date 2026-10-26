import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { getProductsById } from "../../services/productsService";


export const ItemDetailConteiner = () => {
    const {id} = useParams(); //estoy desestructurando id, porque me llega un objeto
    const [itemDetail, setItemDetail] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect (() => {
    //setItemDetail(null); para productos relacionados
    //setItemDetail(null); seteo los estados al original
    //setLoading(true); lo explique abajo

    getProductsById(id)
        .then((data) => setItemDetail(data))
        .catch((error) => setError(error.message))
        .finally(()=>setLoading(false));
    },[id]);
    //si tengo productos relacionados, escribo "id" en el array de dependencias
    //lo uso para disparar de nuevo el useEffect al hacer click en otro producto 
    //dantes del fetch debo setear los setDEESTADOS al valor inicial 
    //setItemDetail(null);
    //setItemDetail(null);
    //setLoading(true);

    //retornos tempranos
    if (loading) return <p>Cargando ...</p>
    if (error) return <p>{error}</p>
    if (!itemDetail) return <p>Producto no encontrado</p> 

    return ( //lo que debe retonar si todo dió bien

        <section className="products-container">
            <div>
                <h3 className="text-center text-dark">Detalle del producto</h3>
            </div>
        
            <div>
                <ItemDetail item = {itemDetail}/>
            </div>

        </section>
    )

};