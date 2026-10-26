import { useState, useEffect } from "react";
import "./ListCategoryConteiner.css"
import { ListCategory } from "../ListCategory/ListCategory"
import {  getCategories } from "../../services/productsService";

export const ListCategoryConteiner = () => {
    const[categoria, setCategoria] = useState ([])
    const[errors, setErrors] = useState(null)
    const[loading, setLoading]=useState(true)

    useEffect (() => { 
        getCategories()
        .then((data) => setCategoria(data))
        .catch ((error) => setErrors (error.message))
        .finally(() => setLoading(false));
    },[]);

    if (loading) return <p>cargando..</p>
    if (errors) return <p>{errors}</p>

    return (

        <section className="seccion-categorias">
            
            <h2 className="titulo-principal text-dark">CATEGORIAS DISPONIBLES</h2>
            
            <ListCategory categorias ={categoria}/>
        
        </section>

    
    )
}

