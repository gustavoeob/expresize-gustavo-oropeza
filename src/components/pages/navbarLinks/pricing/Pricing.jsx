import React from 'react'
import "./Pricing.css"

const Pricing = () => {
  return (
    <>
        <div className="pricing-container">
            <div className="pricing-plans-title">
                <p>Plans</p>
            </div>
            <div className="plans-details-container">
                <div className="price-plan-container">
                    <h2 className="price-plan-title">Basic</h2>
                    <div className="price-plan-includes">
                        <p>• Access for up to 3 Courses</p>
                        <p>• Live Classes</p>
                        <p>• Material Guide</p>
                        <p>• Blog Community Access</p>
                    </div>
                    <p className="price-plan-amount">$4.99</p>
                </div>
                <div className="price-plan-container">
                    <h2 className="price-plan-title">Pro</h2>
                    <div className="price-plan-includes">

                        <p>• Access for up to 5 Courses</p>
                        <p>• Chat Support</p>
                        <p>• Live Classes</p>
                        <p>• Material Guide</p>
                        <p>• Blog Community Access</p>
                    </div>
                    <p className="price-plan-amount">$7.99</p>


                </div>
                <div className="price-plan-container">
                    <h2 className="price-plan-title">Expert+</h2>
                    <div className="price-plan-includes">
                        <p>• Unlimited Courses</p>
                        <p>• Chat Support</p>
                        <p>• Live Classes</p>
                        <p>• Material Guide</p>
                        <p>• Blog Community Access</p>
                        <p>• Personalized Tests</p>
                    </div>
                    <p className="price-plan-amount">$9.99</p>
                    

                </div>
            </div>
        </div>
    </>
  )
}

export default Pricing