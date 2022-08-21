import React from 'react'
import cartWidget from './cart.png'
import "./Cart.css"

const CartWidget = () => {
  return (
    <>
    <div className="cart-widget">
        <p className="item-counter ">5</p>
        <a href="#">
            <img className="cart-icon" alt="cart" src={cartWidget} />
        </a>
    </div>
    </>
  )
}

export default CartWidget