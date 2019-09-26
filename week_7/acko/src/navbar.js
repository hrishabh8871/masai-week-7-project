import React from 'react';
import logo from './logo.svg';
import './App.css';
export default class Navbar extends React.Component  {
    render () {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light ml-5 mb-3">
  <a className="navbar-brand" href="#"><img style = {{'height' : '30px'}} className = "col-lg-12 col-md-6 col-sm-3" src = 'https://image4.owler.com/logo/acko_owler_20180527_125754_original.png'></img></a>
  <div className = "d-flex flex-column">
    <p style = {{"margin" : "3px", "fontSize" : '15px',}}>GENERAL INSSURANCE<p style = {{"margin" : "3px", "fontSize" : '12px'}}className = "text-muted">IRDAI Regn. No. 157</p></p>
  </div>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="nav-link ml-5" href="#">PRODUCTS <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item ml-5">
        <a className="nav-link" href="#">CLAIM</a>
      </li>
    
    </ul>
    <div className = "float-right mr-5">
        <a className = "nav-link" href = "#">Login</a>
     </div>
  </div>
</nav>
            </div>
        )
    }
}