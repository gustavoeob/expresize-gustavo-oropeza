import React from 'react'
import "./ItemListContainer.css"

const ItemListContainer = ({greetings}) => {
  return (
    <div className="main-container">
        <p className="item-list-container-text">{greetings}</p>
    </div>
  )
}

export default ItemListContainer