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

                <form className="subscribe-container" type="submit" onSubmit={handleSubmit}> 
                    <p className="subscribe-text">Subscribe to Newsletter </p>
                    <input className="subscribe-input" type="email" placeholder="example@email.com" onClick={handleSubmit}/>
                </form>

                {/* Agregar un boton de enviar y hacer el evento con enter para el formulario */}
                <p className="footer-sign">Made with love by Gustavo Oropeza <span className="sign-heart" >&hearts;</span></p>
            </footer>
        </>
  )
}

export default Footer