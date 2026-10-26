import "./ItemDetail.css";
import { Item } from "../Item/Item";
import { useCart } from "../../context/CartContext";
import { useState } from "react";

export const ItemDetail = ({ item }) => {
    const { addItem } = useCart();
    
    // Normalizamos el stock
    const stock = item.stock > 0 ? item.stock : 0;
    const cantidad = "Cantidad: ";
    
    // Estados 
    const [quantity, setQuantity] = useState(stock > 0 ? 1 : 0);
    const [isInput, setIsInput] = useState(false);

    // Funciones
    const handleQuantityChange = (e) => {
        const val = e.target.value;
        
        if (val === "mas_de_5") {
            setIsInput(true);
            setQuantity(); 
        } else {
            setQuantity(Number(val));
        }
    };

    // Función auxiliar para renderizar el selector o input según las condiciones
    const renderQuantitySelector = () => {
        if (stock === 0) {
            return <p className="no-stock">Sin stock disponible</p>;
        }

        // Si el usuario eligió "+ de 5", mostramos el input manual
        if (isInput) {
            return (
              
                <input 
                    type="number" 
                    min="1" 
                    max={stock} 
                    value={quantity} 
                    onChange={handleQuantityChange}
                    className="quantity-input"
                />
                
        )}

        // Si el stock es hasta 5, armamos las opciones exactas
        if (stock <= 5) {
            return (
                <select name="quantity" value={quantity} className="quantity-select" onChange={handleQuantityChange}>
                    {Array.from({ length: stock }, (_, index) => {
                        const count = index + 1;
                        return (
                            <option key={count} value={count}>
                                {count}
                            </option>
                        );
                    })}
                </select>
            );
        }

        // Si el stock es mayor a 5, opciones y mas de 5 
        return (
            <select name="quantity" value={quantity} className="quantity-select" onChange={handleQuantityChange}>
                {Array.from({ length: 5 }, (_, index) => {
                    const count = index + 1;
                    return (
                        <option key={count} value={count}>
                            {count}
                        </option>
                    );
                })}
                <option value="mas_de_5">más de 5</option>
            </select>
        );
    };

    return (
        <div className="detail-wrapper">
            <Item {...item}>
                <div className="selector-container">
                    {renderQuantitySelector()}
                </div>

                <button 
                    className="btn bg-secondary text-dark" 
                    onClick={() => addItem(item, quantity)}
                    disabled={stock === 0}
                >
                    Agregar al carrito
                </button>
            </Item>
        </div>
    );
};