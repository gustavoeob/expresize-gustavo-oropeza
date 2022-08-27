import React from 'react'
import './ItemDetail.css'
import ItemCount from '../counter/ItemCount'
import { Link } from 'react-router-dom'

const ItemDetail = ({item}) => {
  return (
    <>

  <div className="item-detail-container">
    <div className="detail-routes-container">
      <Link className="detail-route-link home-link" to={'/'}> Home <span>&gt;</span></Link>
      <Link className="detail-route-link courses-link" to={'/'}> Courses<span>&gt;</span></Link>
      <Link className="detail-route-link language-link" to={`/course/${item.id}`}> {item.name} <span>&gt;</span> </Link>
      <Link disabled className="detail-route-link checkout-link" to={'/checkout'}> Checkout <span>&gt;</span></Link>
    </div>
      <div className="item-detail">
          <div className="left-side-detail-container">
            <img className="card-item-img-detail" src={item.img} alt={item.name} />
          </div>
          <div className="right-side-detail-container">
              <div className="right-top-detail-container">
                <h1>{item.name} <img className='flag-icon' src={item.flagIcon} alt="" /></h1>
                <h4>Here goes some text...</h4>
              </div>
              <div className="right-bottom-detail-container">
                <ItemCount stock={item.stock} initial={1}/>
              </div>
          </div>
      </div>
  </div>
    </>
    )
}


export default ItemDetail