import React, {createContext, useState} from 'react'

export const CartContext = createContext();
export const CartProvider = ({children}) => {

    const [items, setItems] = useState([])
/**
 * It checks if the item is already in the cart, if it is, it adds the quantity to the existing item,
 * if it isn't, it adds the item to the cart
 */
    function addItem(item, quantity) {
        /* Checking if the item is already in the cart. If it is, it will add the quantity to the existing
        item. */
        if(isInCart(item.id)){
            /* Creating a copy of the items array. */
            let aux = items;
            /* Finding the index of the item in the cart. */
            let itemIndex = aux.findIndex((e) => e.id === item.id)
            /* Adding the quantity to the existing item. */
            aux[itemIndex].quantity += quantity;
            /* Adding the new item to the cart. */
            setItems([...aux])
            /* Adding the item to the cart. */
        }else{
            setItems([...items,{...item, quantity}])
        }
    }

    function removeItem(itemId)  {
        setTimeout(() =>{
            setItems(items.filter((e) => e.id != itemId))
        }, 100)
    }
    function clear(){
        setItems([])
    }
    const isInCart = (itemId) => {
        return items.find((e) => e.id == itemId)
    }
    const total = items.reduce((acc, item) => (acc += (item.quantity * item.price.toFixed(2))),0)

    const beforeTaxes = () => {
        const beforeTax = total/1.19 ;
        return beforeTax
    }
    const taxes = () => {
        const tax = total - total/1.19 ;
        return tax
    }
    const totalCart = () => {
        return total
    } 

  return (

        <CartContext.Provider value={{addItem, removeItem, clear, isInCart, totalCart, taxes, beforeTaxes, items}}>
            {children}
        </CartContext.Provider>
  )
}