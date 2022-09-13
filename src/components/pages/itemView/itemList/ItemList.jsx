import React from 'react'
import Item from '../item/Item'
import "../itemList/ItemList.css"
const ItemList = ({items}) => {
  return (
    <>
        <div className="item-list">
            {items.map((item, index) => 
            <Item 
            key={index}
            id={item.id}
            name={item.name}
            img={item.img}
            price={item.price}
            stock={item.stock}
            flagIcon={item.flagIcon}
            />)} 
        </div>
    </>
  )
}

export default ItemList