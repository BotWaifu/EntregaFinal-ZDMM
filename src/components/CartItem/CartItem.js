import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';
import "./CartItem.css"; 

const CartItem = ({ id, name, price, img, title, quantity }) => {
    const { removeItem } = useContext(CartContext);
  
    const handleRemoveItem = () => {
      removeItem(id);
    };
  
    return (
      <div className="cart-item">
        <div className="item-info">
          <h4>{name}</h4>
          <img src={img} alt={title}/>
          <p>Precio: ${price}</p>
          <p>Cantidad: {quantity}</p>
        </div>
        <div className="item-actions">
          <button onClick={handleRemoveItem}>Eliminar</button>
        </div>
      </div>
    );
  };
  
  export default CartItem;