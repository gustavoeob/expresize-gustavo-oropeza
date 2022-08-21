import React from 'react'
import ItemCount from '../counter/ItemCount'
import "../item/Item.css";


const Item = ({id, img, flagIcon, name, stock, price}) => {

    

return (
    <>
      <div className="card-item-container">
        <div className="card-img-container">
          <img className="card-item-img" src={img} alt="" />
        </div>
        <div className="card-flag-container">
          <img className="flag-icon" src={flagIcon} alt="" />
          <p className="card-item name">{name}</p>
        </div>
        <div className="card-info-container">
          <p className="card-item price">Starts at ${price}</p>
          <p className="card-item text">24/7 for you</p>
          <button className="more-info-btn"><span>Find a tutor</span></button>
        </div>
      </div>
    </>
  )
}

export default Item