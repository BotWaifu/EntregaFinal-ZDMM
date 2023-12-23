import Cart from './carro.jpg'
import './CartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../CartContext/CartContext'
import { Link } from 'react-router-dom'

function CartWidget() {
    const  totalQuantity  = useContext(CartContext);
    console.log(totalQuantity.totalQuantity);
  
    return (
      <div>
        <Link to="/cart" style={{ display: totalQuantity.totalQuantity > 0 }}>
          <img src={Cart} alt="logo" />
          {totalQuantity.totalQuantity > 0 && <span>{totalQuantity.totalQuantity}</span>}
        </Link>
      </div>
    );
  }
  
  export default CartWidget;