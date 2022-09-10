import React, {useContext} from 'react'
import {CartContext} from '../../../context/CartContext'
import {Link} from 'react-router-dom'
import './Cart.css'

const CartSummary = () => {
    const {totalCart, taxes, beforeTaxes} = useContext(CartContext);
  return (
            <>
                <div className="summary-container">
                    <div>
                        <p className="summary-title">Summary</p>
                    </div>
                    <div className="summary-message">
                        
                    <p>Once the payment is processed, you'll receive an email with a code to redeem your course(s). </p>
                    </div>
                    <div className="pay-now-container">
                        <div className="taxes">
                            <p>Before Taxes</p>
                            <p className="tax-amount-cart">$<span className="total-amount">{(beforeTaxes().toFixed(2))}</span></p>
                        </div>
                        <div className="taxes">
                            <p>Taxes <span className="tax-percentage">(19%)</span></p>
                            <p className="tax-amount-cart">$<span className="total-amount">{(taxes().toFixed(2))}</span></p>
                        </div>
                        <div className="total">
                            <p>Total</p>
                            <p className="total-price-cart">$<span className="total-amount">{(totalCart().toFixed(2))}</span></p>
                        </div>
                        <Link to='/checkout' className="pay-now-btn">
                        <p className="pay-now">Proceed to Checkout</p>
                        </Link>
                    </div>
                </div>
            </>
  )
}

export default CartSummary