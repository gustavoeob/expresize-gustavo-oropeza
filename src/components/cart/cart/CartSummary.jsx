import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import "./Cart.css";
import Form from "./Form";

const CartSummary = () => {
  const { totalCart, taxes, beforeTaxes, items, totalQuantity } = useContext(CartContext);
  return (
    <>
      <div className="cart-details-container">
        <div className="summary-container">
          <div>
            <p className="summary-title">Summary</p>
          </div>
          <div className="summary-message">
            <p>
              Once the payment is processed, you'll receive an email with a code
              to redeem your course(s).
            </p>
          </div>
          <div className="summary-details-container">
            <div className="total-quantity-container">
                <p>Quantity</p>
                <p>{totalQuantity}</p>
            </div>
            <div className="taxes">
              <p>Before Taxes</p>
              <p className="tax-amount-cart">
                $
                <span className="total-amount">{beforeTaxes().toFixed(2)}</span>
              </p>
            </div>
            <div className="taxes">
              <p>
                Taxes <span className="tax-percentage">(19%)</span>
              </p>
              <p className="tax-amount-cart">
                $<span className="total-amount">{taxes().toFixed(2)}</span>
              </p>
            </div>
            <div className="total">
              <p>Total</p>
              <p className="total-price-cart">
                $<span className="total-amount">{totalCart().toFixed(2)}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="form-details-container">
            {
          <Form total={totalCart(items)} order={items} /> 
          }
        </div>
      </div>
    </>
  );
};

export default CartSummary;
