import React from 'react'
import { Link } from 'react-router-dom'
import './notFound.css'

const NotFound = () => {
  return (
    <>
        <div className="not-found-container">
            <div className="not-found-chinese-message-container">
                <p className="not-found-404">404!</p>
                <p className="not-found-chinese-typography">未找到</p>
                <p className="not-found-chinese-pronunciation">Wèi zhǎodào</p>
            </div>
            <div className="not-found-english-message-container">
                <p className="not-found-message">Now you learned how to say <span className="not-found-span">not found </span>in Chinese</p>
                <p className="not-found-message">And that's because you may have typed a wrong URL, the page doesn't exist anymore or it hasn't been created yet</p>
                <button className="go-home-btn"> <Link  to="/" className="go-home-link">Go home</Link> </button>
            </div>
        </div>
    </>
  )
}

export default NotFound