import React, { createContext, useState } from 'react';

export const CartContext = createContext({
  cart: [],
  clearCart: () => {}, 
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  console.log(cart);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
    } else {
      console.error('El producto ya fue agregado');
    }
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
    return
  };
  const totalPrice = ()=>{
    return cart.reduce((prev,act)=>prev + act.quantity * act.price, 0)
}
  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

