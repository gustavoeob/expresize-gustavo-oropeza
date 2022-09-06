import React, {createContext, useState} from 'react'

export const CartContext = createContext();
export const CartProvider = ({children}) => {

    const [items, setItems] = useState([])

    function addItem(item, quantity) {
        if(isInCart(item.id)){
            let aux = items;
            let itemIndex = aux.findIndex((e) => e.id === item.id)
            aux[itemIndex].quantity += quantity;
            setItems([...aux])
        }else{
            setItems([...items,{...item, quantity}])
        }
    }
    function removeItem(itemId)  {
         setItems(items.filter((e) => e.id !== itemId))
    }
    function clear(){
        setItems([])
    }
    const isInCart = (itemId) => {
        return items.find((e) => e.id === itemId)
    }


  return (

        <CartContext.Provider value={{addItem, removeItem, clear, isInCart, items}}>
            {children}
        </CartContext.Provider>
  )
}