import React, { useContext, Fragment } from 'react'
import './Cart.css'
import { CartContext } from '../../../context/CartContext'
import {Link} from 'react-router-dom'
import CartItemDisplay from './CartItemDisplay';


const Cart = () => {
  const {items} = useContext(CartContext);


  return (
    <>
      {!items.length ? 
        <div className="empty-cart-container">
          <p className="cart-empty-msg">Nothing here yet! 😢</p>
          <Link className="not-found-redirect" to="/">
              Go back
          </Link>
        </div>
       : 
        <CartItemDisplay/>
      }
  </>
  )
}

export default Cart