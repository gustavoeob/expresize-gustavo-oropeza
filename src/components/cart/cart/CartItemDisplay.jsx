import React, {useContext, Fragment} from 'react'
import './Cart.css'
import remove from "../../assets/icons/minus.png";
import { CartContext } from '../../../context/CartContext'
import CartSummary from './CartSummary';
import { Link } from 'react-router-dom';

const CartItemDisplay = () => {

    const {items, totalCart, clear, removeItem} = useContext(CartContext);

  return (
        <>
            <div className="cart-container">
                <h2 className="cart-title">Here are the items you have chosen</h2>
                <div className="cart-detail-container">
                    <div className="cart-items-container">
                        <div className="cart-detail-top">
                            <p className="language-title titles">Courses</p>
                            <p className="price-title titles">Price</p>
                            <p className="quantity-title titles">Quantity</p>
                            <p className="subtotal-title titles">Subtotal</p>
                        </div>
                        {items.map((item) => (
                        <Fragment key={item.id}>
                            <div className="cart-items">
                                <div className="cart-item-image-container">
                                    <img className="cart-item-image" src={item.flagIcon} alt="" />
                                </div>
                                <p className="cart-item-name"><span className="selected-cart-item-name"> <Link to={`/course/${item.id}`}  className="selected-cart-item-name-link">{item.name}</Link></span></p>
                                <p className="cart-item-price">${item.price}</p>
                                <p className="cart-item-quantity"> {item.quantity}</p>
                                <button key={item.id}
                                className="remove-cart-item"
                                onClick={() => removeItem(item.id)}>
                                    <img className="remove-icon" alt="minus icon" src={remove} />
                                </button>
                                <p className="cart-item-subtotal">  ${Number(item.quantity* item.price).toFixed(2)} </p>
                            </div>
                        </Fragment>
                        ))}
                        <div className="remove-items-button-container">
                            <button
                            className="remove-all-cart-items"
                            onClick={() => clear()}>
                            Clear All
                            </button>
                        </div>
                    </div>
                    <CartSummary totalCart={totalCart}/>
                </div>
            </div>   
        </>
    )
}

export default CartItemDisplay