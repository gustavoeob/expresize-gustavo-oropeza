import React from 'react'
import "./ItemListContainer.css"
import ItemCount from "../counter/ItemCount"

const ItemListContainer = ({initial, stock}) => {
  return (
    <div className="main-container">
        <ItemCount stock={8} initial={1} />
    </div>
  )
}

export default ItemListContainer