import React from 'react'
import "./Help.css"

const Help = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }
  return (
  <>
    <div className="help-container">
        <form className="help-form" onSubmit={handleSubmit}>
            <label className="help-label">Fullname</label>  
            <input className="help-input" type="text" placeholder="Your name" required />
            <label className="help-label">Email</label>
            <input className="help-input" type="email" placeholder="example@email.com" required/>
            <label className="help-label">Phone</label>
            <input className="help-input" type="number" placeholder="+(code)-0123456789" required/>
            <label className="help-label">Request</label>
            <textarea className="help-form-field" name="" id="" cols="30" rows="10" placeholder="Tell us anything..." required></textarea>
            <button type="submit" className="send-request-button">Send</button>
        </form>
    </div>
  </>
  )
}

export default Help