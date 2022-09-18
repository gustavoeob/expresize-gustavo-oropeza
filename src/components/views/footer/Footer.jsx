import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import "./Footer.css"

const Footer = () => {
    const [emailInput, setEmailInput] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setEmailInput(e.target.value)
        console.log(emailInput)
        
    }


  return (
        <>
            <footer className="footer-container">
                <div className="first-footer-container">

                <form className="subscribe-container" type="submit" onSubmit={handleSubmit}> 
                    <p className="subscribe-text">Subscribe to Newsletter </p>
                    <input className="subscribe-input" type="email" placeholder="example@email.com" onClick={handleSubmit}/>
                    <button className="subscribe-send-button">✉️</button>
                </form>
                </div>
                <div className="second-footer-container">

                <p className="footer-sign">Made with love by Gustavo Oropeza <span className="sign-heart" >&hearts;</span></p>
                </div>
                <div className="third-footer-container">
                    <ul className="social-icons">
                        <div className="social-first-row">
                            <li><Link to="/"><i className="fa fa-instagram"></i></Link></li>
                        </div>
                        <div className="social-second-row">
                            <li><Link to="/"><i className="fa fa-twitter"></i></Link></li>
                        </div>
                        <div className="social-third-row">
                            <li><Link to="/"><i className="fa fa-linkedin"></i></Link></li>
                        </div>
                        <div className="social-fourth-row">
                            <li><Link to="/"><i className="fa fa-codepen"></i></Link></li>
                        </div>
                    </ul>
                </div>
            </footer>
        </>
  )
}

export default Footer