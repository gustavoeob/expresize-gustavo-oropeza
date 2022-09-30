import React from 'react'
import "./Landing.css"
import Cover from "./cover.jpg"
import {Link} from 'react-router-dom'

const Landing = () => {
  return (
    <>
        <div className="landing-container">
            <div className="landing-image-container">
                <img className="landing-image" src={Cover} alt="" />
            </div>
            <div className="landing-text-container">
                <h2 className="landing-title landing-item">Learning languages never made easier</h2>
                <button className="landing-button landing-item">
                  <span>
                    <Link to="/courses" className="landing-link">Get Started</Link> 
                  </span>
                  </button>
            </div>
        </div>
    </>
  )
}

export default Landing;