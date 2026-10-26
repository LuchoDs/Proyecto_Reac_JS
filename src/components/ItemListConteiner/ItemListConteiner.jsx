import { useState, useEffect } from "react";
import "./ItemListConteiner.css"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/productsService"
import { filteredProducts } from "../../services/productsService";

export const ItemListConteiner = () => {
    const { category } = useParams()
    const [products, setProducts] = useState([]); //va a guardar lo que viene del json - inicia vacio, se actuializa con setProducts al final del fetch
    const [errors, setErrors] = useState(null); //va a guardar los errores que puedan surgir en el fetch (lo atrapa en el catch) inicia en null, se actualiza con setErrors al final del fetch
    const [loading, setLoading] = useState(true);

    useEffect (() => { // sintaxis básica: una función y un array -> useEffect(() => { ... }, []); 
        setErrors(null); // seteo los estados al original
        setLoading(true);
        
        const start = category ? filteredProducts(category): getProducts()
        //fetch ("/data/products.json") no se menciona a Public - ruta absoluta a data/products.json (sintaxis fetch - then - then - catch - finally)
        //LO REEMPLAZO POR MI FUNCION DE CONSULTA A LA BASE DE DATOS
        // getProducts()
        start
        .then ((data) => setProducts(data))
        .catch ((error) => setErrors (error.message)) //error es un parametro
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