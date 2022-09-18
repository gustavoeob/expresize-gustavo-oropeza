import React, { useState, useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const Input = ({
  className,
  type,
  name,
  value,
  inputClassName,
  onChange,
  placeholder
}) => {
  return (
    <div className={className}>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={inputClassName} 
        placeholder={placeholder}
        required
        />
    </div>
  );
};

const Form = ({ total, order }) => {
  const { clear, createOrder} = useContext(CartContext);
  const timeElapsed = Date.now();
  const date = new Date(timeElapsed);
  
  const [form, setForm] = useState({
    buyer: {
      name: "",
      surname: "",
      email: "",
      phone: "",
    },
    total: total,
    items: order,
    date: date,
  });

  const onSubmit = (e) => {
    e.preventDefault();
    createOrder({ data: form });
    clear();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      buyer: {
        ...form.buyer,
        [name]: value,
      },
    });
  };

  return (
    <form onSubmit={onSubmit} className="checkout-form-container">
      <div>
        <p className="input-checkout-title">Personal Info</p>
        <p className="form-fill-message">All fields marked * are required to generate your order</p>
      </div>
      {Object.keys(form.buyer).map((key,index) => (
        <Input
        key={index}
        className={`${key}-form-container`}
        type="text"
        name={`${key}`}
        value={key.value}
        onChange={handleChange}
        inputClassName={`${key}-input form-detail-field`}
        placeholder={`${key}*`}
        required
        />
      ))}
      
      <div className="cart-total-purchase-button">
            <button className="pay-now pay-now-button" type="submit">
                Purchase 
            </button>
      </div>
    </form>
  );
};

export default Form;