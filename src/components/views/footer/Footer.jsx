import React, {useState} from 'react'
import "./Footer.css"




const Footer = () => {
    const [emailInput, setEmailInput] = useState('')
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setEmailInput(event.target.value)
        console.log(emailInput)
}



  return (
        <>
            <footer className="footer-container">

                <form className="subscribe-container" onSubmit={handleSubmit}> 
                    <p className="subscribe-text">Subscribe to Newsletter </p>
                    <input className="subscribe-input" onChange={(e)=> handleSubmit(setEmailInput)} type="email" placeholder="example@email.com"  />
                </form>
                <p className="footer-sign">Made with love by Gustavo Oropeza &hearts;</p>
            </footer>
        </>
  )
}

export default Footer