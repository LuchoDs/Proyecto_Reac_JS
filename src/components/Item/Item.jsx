import "./Item.css"

export const Item = ({name, img, volume, price, children}) => {
    
    return (
        <article className="card text-dark">
            <img src= {img}/>
            <h3>{name}</h3>
            <p>{volume}</p>
            <p>Precio: $ {price.toLocaleString('es-AR')}.-</p>

            {/* Podemos usar children y reutilizar este componente */}
            {children}
        </article>

    )

}