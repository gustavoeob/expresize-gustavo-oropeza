import React, {useContext} from 'react'
import cartWidget from './cart.png'
import "./CartWidget.css"
import Cart from '../cart/Cart'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../context/CartContext'

const CartWidget = () => {

  const {items} = useContext(CartContext);

  return (
    <>
      <div className="cart-widget">
          <p className="item-counter "><span className="cart-count">{(items.reduce((acc, el) => acc + el.quantity, 0))}</span></p>
          <Link to="/cart" element={<Cart/>}>
              <img className="cart-icon" alt="cart" src={cartWidget} />
          </Link>
      </div>
    </>
  )
}

export default CartWidget