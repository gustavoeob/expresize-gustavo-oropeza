import React, {useState} from 'react'
import './ItemCount.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'

const ItemCount = ({stock, initial, onAdd}) => {

const [counter, setCounter] = useState(initial)
const [count, setCount] = useState(counter)

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
                <p className="showStock">Rooms Available: {stock} {<FontAwesomeIcon className="users-icon-counter" icon={faUsers} />}</p>
            </div>
            <div className="counterContainer">
                <button className="decrement" disabled={counter === 0} onClick={decrement}>-</button>
                <span className="counter">{counter}</span>
                <button className="increment" onClick={increment}>+</button>
            </div>
            <div className="addToCartContainer">
                <button onClick={() => onAdd(counter)} className="addToCart" disabled={counter === 0} >Add to Cart</button>
            </div>
        </div>
    </>
  )
}

export default ItemCount