import { useState, useEffect } from "react";
import "./ItemListConteiner.css"
import { ItemList } from "../ItemList/ItemList"

export const ItemListConteiner = () => {
    const [products, setProducts] = useState([]);
    const [errors, setErrors] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect (() => {
        fetch ("/data/products.json")
        .then ((resp) => {
            if (!resp.ok) {
                throw new Error ("error al cargar los productos");
                }
            return resp.json()
        })
        .then ((data) => setProducts(data))
        .catch ((error) => setErrors (error.message))
        .finally (() => setLoading(false));        
    },[]);

    if (loading) return <p>cargando..</p>
    if (errors) return <p>{errors}</p>

    return (
        <section>
        <h1 className="titulo-principal text-dark">BIENVENIDOS A NUESTRA TIENDA</h1>
        
        <h2 className = "titulo-productos text-ligth">PRODUCTOS</h2>
        
        <ItemList products = {products}/>
        
        </section>
    );
}