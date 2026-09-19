import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemCategory } from "../ItemCategory/ItemCategory"
import "./ItemCategoryConteiner.css"

export const ItemCategoryConteiner = () => {
    const[itemCategory,setItemCategory] = useState([])
    const[errors,setErrors] = useState(null)
    const[loading,setLoading] = useState(true)
    const { category } = useParams()

    useEffect (() => {
        setErrors(null); // seteo los estados al original
        setLoading(true)
    //Category en Array de dependencias
    // //setItemCategory(null) para categorias relacionadas

    fetch("/data/products.json")
    .then((resp) => {
        if(!resp.ok) {
            throw new Error ("No hay productos para mostrar");
        };
        return resp.json();
    })
    .then((data) => setItemCategory(data))
    .catch ((error) => setErrors (error.message))
    .finally(()=> setLoading(false))        
    },[category]);

    if (loading) return <p>cargando..</p>
    if (errors) return <p>{errors}</p>
 
     //filtrado para categoria de json === categoria de URL
    const filteredCategory = itemCategory.filter((item) => {
        if(!category) return true;
        return item.category === category;
    });



    return (
        <section>
            <h1 className="titulo-principal text-dark">{category}</h1>
        
            <ItemCategory itemCategory = {filteredCategory}/>
        
        </section>
    );
};
    
