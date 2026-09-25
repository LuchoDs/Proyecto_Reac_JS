import { useState, useEffect } from "react";
import "./ItemListConteiner.css"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom";


export const ItemListConteiner = () => {
    const { category } = useParams()
    const [products, setProducts] = useState([]);
    const [errors, setErrors] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect (() => {
        setErrors(null); // seteo los estados al original
        setLoading(true);

        fetch ("/data/products.json")
        .then ((resp) => {
            if (!resp.ok) {
                throw new Error ("error al cargar los productos");
                }
            return resp.json()
        })
        .then ((data) => {
            if (category) {
                    const filteredProducts = data.filter((item) => item.category.toLowerCase() === category);
                    setProducts(filteredProducts);
                    return;
            }
                  
            return setProducts(data);
        })//setProducts(data)) aca ver la category para filtrar
        .catch ((error) => setErrors (error.message))
        .finally (() => setLoading(false));        
    },[category]); // array de dependencia con category para recargar el componente con la ruta


    // Lógica para definir el título según la categoría
    let titulo = "BIENVENIDOS A NUESTRA TIENDA";
    let subtitulo ="PRODUCTOS";
    let claseTitulo = "";

    if (category) {
        subtitulo= "Productos de la categoria"
        const lowCategory = category.toLowerCase();      
        if (lowCategory === "vino") {
                titulo = `".. uva uva uva.. hacete ${category.toUpperCase()}"`;
                claseTitulo = "titulo-vino";
                console.log(claseTitulo);
            } else if (lowCategory === "whisky") {
                titulo = `".. lo que duran dos peces de hielo en un ${category.toUpperCase()} on the rocks .."`;
                claseTitulo = "titulo-whisky";
                console.log(claseTitulo);
            } else {
                titulo = `Ud. está en categoría ${category.toUpperCase()}`;
              claseTitulo = "titulo-categoria";
            console.log(claseTitulo);
        }
    }

    if (loading) return <p>cargando..</p>
    if (errors) return <p>{errors}</p>

    return (
        <section>

        <h1 className={`titulo-principal text-dark ${claseTitulo}`}>{titulo}</h1>
        
        <h2 className = "titulo-productos text-ligth">{subtitulo}</h2>
        
        <ItemList products = {products}/>
        
        </section>
    );
}