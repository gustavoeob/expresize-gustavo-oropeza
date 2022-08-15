import React, {useState} from 'react'
import './ItemCount.css'

const ItemCount = ({stock, initial, onAdd}) => {

const [counter, setCounter] = useState(initial)

const decrement = () => {
    if (counter > 0){
    setCounter(counter - 1)
    }
}
const increment = () => {
    if (counter < stock){
        setCounter(counter + 1)
    }
}

  return (
    <>
        <div className="itemActionContainer">
            <div>
                <p className="abc">Title and image go here</p>
                <p className="showStock">Stock Available: {stock}</p>
            </div>
            <div className="counterContainer">
                <button className="decrement" onClick={decrement}>-</button>
                <span className="counter">{counter}</span>
                <button className="increment" onClick={increment}>+</button>
            </div>
            <div className="addToCartContainer">
                <button className="addToCart">Add to Cart</button>
            </div>
        </div>
    </>
  )
}

export default ItemCount