import React from 'react';
import logo from './logo.svg';
import './App.css';
export default class Claim extends React.Component {
    render () {
        return (
            <div>
                <div style = {{height : "400px"}} className = "w-100">
                    <p className = "display-4">How To Claim Car Insurance?</p>
                    <div className = "d-flex justify-content-around">
                    <div>
                    <img src = "https://www.acko.com/static/realm/icons/claimsRegister.svg"></img>
                    <p className = "font-weight-bold m-2">You Register</p>
                    <p className = "text-muted">Register your claim at acko.com or call us on 1860 266 2256.</p>
                    </div>
                    <p className = "m-5">------------------</p>
                    <div>
                    <img src = "https://www.acko.com/static/realm/icons/claimsPickup.svg"></img>
                    <p className = "font-weight-bold m-4">We Pick Up</p>
                    <p className = "text-muted">We’ll pick up your car for repairs in the next 60 mins.*</p>
                    </div>
                    <p className = "m-5">------------------</p>
                    <div>
                    <img src = "https://www.acko.com/static/realm/icons/claimsRelax.svg"></img>
                    <p className = "font-weight-bold m-3">You Relax</p>
                    <p className = "text-muted">Be stress-free as you track the repair status on our website.</p>
                    </div>
                    <p className = "m-5">------------------</p>
                    <div>
                    <img src = "https://www.acko.com/static/realm/icons/claimsDeliver.svg"></img>
                    <p className = "font-weight-bold m-4">We Deliver</p>
                    <p className = "text-muted">We’ll drop off your car repaired and ready to go in three days.*</p>
                    </div>
                    </div>
                </div>
                <div className = "w-100">
                <p className = "p-5">*In Select Cities - Ahmedabad, Bengaluru, Chennai, Delhi, Hyderabad, Kolkata, Mumbai & PunePlease note: Previous Policy document is required in case of claim within 30 days of the Acko Policy Start Date.</p>
                </div>
            </div>
        )
    }
}