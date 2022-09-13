  import React, { useContext, useState, useEffect } from 'react'
  import './Cart.css'
  import { CartContext } from '../../../context/CartContext'
  import {Link} from 'react-router-dom'
  import CartItemDisplay from './CartItemDisplay';
  import Loading from '../../views/loading/Loading';
  
  
  const Cart = () => {
  
    const {items} = useContext(CartContext);
  
  useEffect(() => {
    
    setTimeout(() => {
      setLoading(false);
    },500)
    
  }, [])
  
  const [loading, setLoading] = useState(true);
  if (loading){
    return <Loading />
  }
  
  
    return (
      <>
        {!items.length ? 
          <div className="empty-cart-container">
            <p className="cart-empty-msg">Cart is empty 💔</p>
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