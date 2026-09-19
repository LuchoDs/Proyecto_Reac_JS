import { useState, useEffect } from "react";
import "./ListCategoryConteiner.css"
import { ListCategory } from "../ListCategory/ListCategory"

export const ListCategoryConteiner = () => {
    const[categoria, setCategoria] = useState ([])
    const[errors, setErrors] = useState(null)
    const[loading, setLoading]=useState(true)

    useEffect (() => {
        fetch("/data/products.json")
        .then((resp) => {
            if(!resp.ok) {
                throw new Error ("No hay productos para mostrar")
            }
            return resp.json()
        })
        
        .then((data) => {
            const catUnicas = [...new Set (data.map((item)=> (item.category || "categoria-no-definida").toLowerCase()))]
            setCategoria(catUnicas);
        })  

        .catch ((error) => setErrors (error.message))
        .finally(() => setLoading(false));
    },[]);

    if (loading) return <p>cargando..</p>
    if (errors) return <p>{errors}</p>

    return (

        <section>
            <h2 className="titulo-principal text-dark">CATEGORIAS DISPONIBLES</h2>
            <ListCategory categorias ={categoria}/>
        
        </section>

    
    )
}

