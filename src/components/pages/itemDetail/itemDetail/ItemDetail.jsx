import React, {useState, useContext} from 'react'
import './ItemDetail.css'
import ItemCount from '../counter/ItemCount'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { faHandshakeAngle } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../../../context/CartContext'

// This function displays an the single selected item detail
const ItemDetail = ({item}) => {
  const {addItem} = useContext(CartContext);
  const [counter, setCounter] = useState(0);


/**
 * The function takes in a count, sets the counter to that count, and then calls the addItem function,
 * passing in the item and count
 */
  const onAdd = (count) =>{
    setCounter(count)
    addItem(item, count);
  }
  return (
    <>
      <div className="item-detail-container">
        <div className="detail-routes-container">
          <Link className="detail-route-link home-link" to={'/'}> Home <span>&gt;</span></Link>
          <Link className="detail-route-link courses-link" to={'/'}> Courses <span>&gt;</span></Link>
          <Link className="detail-route-link language-link" to={`/course/${item.id}`}> {item.name} <span>&gt;</span> </Link>
          <Link disabled className="detail-route-link checkout-link" to={'/checkout'}> Checkout <span>&gt;</span></Link>
        </div>
          <div className="item-detail">
                <div className="flag-icon-detail-container">
                  <img className='flag-icon' src={item.flagIcon} alt="" />
                </div>
              <div className="left-side-detail-container">
                <div className="each-img-detail-container">
                  {/* 1:1 aspect */}
                  <img className="card-item-img-detail img-detail-four" src={item.img[0]} alt={item.name} />
                </div>
                <div className="each-img-detail-container">
                  {/* 4:3 aspect */}
                  <img className="card-item-img-detail img-detail-one" src={item.img[1]} alt={item.name} />
                </div>
                <div className="each-img-detail-container">
                  {/* 4:3 aspect */}
                  <img className="card-item-img-detail img-detail-two" src={item.img[2]} alt={item.name} />
                </div>
                <div className="each-img-detail-container">
                  {/* 1:1 aspect */}
                  <img className="card-item-img-detail img-detail-three" src={item.img[3]} alt={item.name} />
                </div>
              </div>
              <div className="right-side-detail-container">
                  <div className="right-top-detail-container">
                      <h3 className="item-detail-name">{item.name} <span> {item.level}</span></h3>
                    <div className="item-detail-description-container">
                      <p className="item-detail-description">{item.description}</p>
                      <p className="item-detail-price">For only: ${item.price}</p>
                      <p className="item-detail-description-includes">This course includes:<span className="detail-live-icon"> 
                        {item.isLive ? <span> | <FontAwesomeIcon icon={faVideo}/></span> : ""} </span> | {<FontAwesomeIcon icon={faFilePdf}/>} | {<FontAwesomeIcon icon={faHandshakeAngle}/>} |
                    </p>
                    </div>
                  </div>
                  <div className="right-bottom-detail-container">
                    {counter !== 0 ? 
                    <div className="item-detail-checkout-container">
                      <span className="added-to-cart-message">Added to cart successfully! 🎉</span>
                      <Link to="/cart">
                      <button className="item-detail-button-checkout">Go to Cart</button>
                      </Link> 
                    </div> : 
                    <div>
                      <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
                      
                    </div>
                    }
                  </div>
              </div>
          </div>
      </div>
    </>
    )
}


export default ItemDetail

