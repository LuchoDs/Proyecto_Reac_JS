import "./ListCategory.css"
import { Link } from "react-router-dom"

export const ListCategory = ({categorias}) => {

    if(!categorias.length) {
        return <p>NO hay productos para cargar</p>
    }                       
    const capitalizar = (texto) => texto.charAt(0).toUpperCase() + texto.slice(1);
    //texto: parametro de la funcion
    //.charAt(0): metodo de selccion del primer caracter
    // .toUpperCase(): metodo que aplica mayuscula (en este caso sólo al primer caracter)
    //slice: me devuelve un array de valores extraido segun indice. slice(inicio, fin) - 1 = index [1], la y final es index[5] - la longitud de whisky es 6 (es un solo string, los index son cada letra)
    return (
        <div className ="contenedor-tarjetas">
            {categorias.map((cat) => (
                
                <Link to={`/category/${cat}`} className ="id-link" key={cat}>
                    <button className="btn bg-primary text-dark">{capitalizar(cat)}</button>
                </Link>

            ))}

        </div>
    )


    
}