import React from 'react'
import '../loading/Loading.css'

const Loading = () => {
  return (
    <>
      <div className="spinner">
        <div className="cube1"></div>
        <div className="cube2"></div>
      </div>
      <p className="spinner-text">Loading...</p>
    </>
  )
}

export default Loading