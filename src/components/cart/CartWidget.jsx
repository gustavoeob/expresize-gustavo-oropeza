import React from 'react'
import cartWidget from './cart.png'
import "./Cart.css"
import {Link} from "react-router-dom"
import Cart from './Cart'

const CartWidget = () => {
  return (
    <>
      <div className="cart-widget">
          <p className="item-counter ">5</p>
          <Link to={"/cart"} element={<Cart/>}>
              <img className="cart-icon" alt="cart" src={cartWidget} />
          </Link>
      </div>
    </>
  )
}

export default CartWidget