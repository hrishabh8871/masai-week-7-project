import React from 'react';
import logo from './logo.svg';
import './App.css';
export default class Header extends React.Component {
    render() {
        return (
            <div>
                <div className = "d-flex justify-content-center">
                    <img style = {{"height":"400px"}} className = "w-50 m-5" src = "https://www.acko.com/static/realm/images/worldcupBanner.png"></img>
                    <div className = "w-100 m-5">
                        <div className = "d-flex justify-content-center">
                            <p className = "bg-warning rounded w-25 btn">Car</p>
                            <p className = " w-25 btn">Bike</p> 
                        </div>
                        <div>
                            <p style = {{"font-size" : "25px"}} className = "h6">The no-brainer choice for car & bike insurance</p>
                            <p className = "text-muted">Secure your car instantly at insanely low premiums.</p>
                        </div>
                        <div className="shadow">
                            <input style = {{"height" : "40px"}} className = "w-50 shadow p-3 mb-5 bg-black rounded" type = "text" placeholder = "Your Car Number"></input>
                            <button style = {{"background" : "#9448FF", width: "50px;" }} className = "rounded text-white btn mr-5">View Prices</button>
                        </div>
                        <p style = {{color: "#9448FF"}} className ="float-left h6 btn">Don't know your car number</p>
                        <p style = {{color: "#9448FF"}} className ="float-left btn">></p><br></br><br></br>
                        <div style = {{background: "whiteSmoke", height : "50px"}} className= "float-left w-75 mt-5">
                            <p className = "mb-5">
                            Already Bought an Acko Policy? <p style = {{color: "#9448FF"}} className="btn">Renew Now</p>
                            </p>
                        
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}