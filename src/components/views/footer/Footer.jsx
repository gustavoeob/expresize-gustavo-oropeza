import React, {useState} from 'react'
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
                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                        </div>
                        <div className="social-second-row">
                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        </div>
                        <div className="social-third-row">
                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                        </div>
                        <div className="social-fourth-row">
                            <li><a href="#"><i className="fa fa-codepen"></i></a></li>
                        </div>
                    </ul>
                </div>

                {/* Agregar un boton de enviar y hacer el evento con enter para el formulario */}
            </footer>
        </>
  )
}

export default Footer