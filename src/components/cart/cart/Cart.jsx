import React, { useContext } from 'react'
import './Cart.css'
import { CartContext } from '../../../context/CartContext'

const Cart = () => {

  const {items} = useContext(CartContext);

  return (
    <>
        <div className="cart-container">
          <ol>
           
            {items.length ?
             items.map((item, index) => <li key={index}> {item.name} - {item.quantity} <img src={item.img}/> </li>):
             <h1>No hay nada en el carro</h1>}
          </ol>
        </div>
    </>
  )
}

export default Cart