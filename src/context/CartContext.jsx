import React, { createContext, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import db from "../index";
import Swal from "sweetalert2";

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  function addItem(item, quantity) {
    /* Checking if the item is already in the cart. If it is, it will add the quantity to the existing
        item. */
    if (isInCart(item.id)) {
      /* Creating a copy of the items array. */
      let aux = items;
      /* Finding the index of the item in the cart. */
      let itemIndex = aux.findIndex((e) => e.id === item.id);
      /* Adding the quantity to the existing item. */
      aux[itemIndex].quantity += quantity;
      /* Adding the new item to the cart. */
      setItems([...aux]);
      /* Adding the item to the cart. */
    } else {
      setItems([...items, { ...item, quantity }]);
    }
  }

  /**
   * It removes an item from the list after 100ms.
   */
  function removeItem(itemId) {
    setTimeout(() => {
      setItems(items.filter((e) => e.id !== itemId));
    }, 100);
  }
  /**
   * It clears the items array.
   */
  function clear() {
    setItems([]);
  }
  /**
   * If the itemId is found in the items array, return true, otherwise return false.
   * returns The function isInCart is returning a boolean value.
   */
  const isInCart = (itemId) => {
    return items.find((e) => e.id === itemId);
  };

  const totalQuantity = items.reduce((acc, item) => (acc += item.quantity), 0);
  /* Calculating the total of the cart. */

  const total = items.reduce(
    (acc, item) => (acc += item.quantity * item.price.toFixed(2)),
    0
  );

  const beforeTaxes = () => {
    const beforeTax = total / 1.19;
    return beforeTax;
  };
  const taxes = () => {
    const tax = total - total / 1.19;
    return tax;
  };
  const totalCart = () => {
    return total;
  };

  /**
   * It creates a new order in the database
   */
  const createOrder = async ({ data }) => {
    try {
      const col = collection(db, "orders");
      const order = await addDoc(col, data);
      Swal.fire({
        title: `Order created`,
        html: `A receipt has been sent to your email. <br> <br> ID: ${order.id}`,
        icon: "success",
        width: 600,
        padding: "3em",
        color: "#db5f00",
        background: "#fff",
        confirmButtonColor: "#db5f00",
        backdrop: `url("https://acegif.com/wp-content/uploads/gif/confetti-8.gif") repeat`
      });

    } catch (error) {
      return error;
    }
  };

  return (
    <CartContext.Provider
      value={{
        addItem,
        removeItem,
        clear,
        isInCart,
        totalCart,
        taxes,
        beforeTaxes,
        items,
        totalQuantity,
        createOrder
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
