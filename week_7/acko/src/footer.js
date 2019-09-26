import React from 'react';
import logo from './logo.svg';
import './App.css';
export default class Footer extends React.Component {
    constructor(props){
        super(props)
        
        this.state = {
            company: ["About Us", "Board Of Director", "Careers", "Media Kit", "Articles", "Partnerships", "Sitemap"]     
          
        }}
    render () {
        return (
            <div>
                <div style = {{'height' : '300px',"background": "#000000"}} className = ' w-100 d-flex justify-content-around'>
                <div style = {{fontSize: "10px"}} className = "w-25 text-white mt-5">
                    <img style = {{'height' : '50px'}} className = "w-50 rounded" src = 'https://image4.owler.com/logo/acko_owler_20180527_125754_original.png'></img><br></br>
                    <p>Acko General Insurance Ltd.</p>
                    <p>Unit No. 301 & 302, 3rd Floor, F wing, Lotus Corporate Park, Off Western Express Highway, Jay Coach, Goregaon East, Mumbai 400063.</p>
                    <p>Email: hello@acko.com</p>
                    <p>Phone: 1860 266 2256</p>
                </div>
                <div className = "m-5">
                    <ul style = {{listStyle: "none"}} className = "ml-5 text-white">
                        <li style = {{"fontSize" : "20px"}}>Company</li><br></br>
                        {
                            this.state.company.map((name) => {
                               return (
                                <li style = {{"fontSize" : "10px"}}>{name}</li>
                               );
                            })
                        }
                    </ul>
                </div>
                <div className = "m-5">
                    <ul style = {{listStyle: "none"}} className = "ml-5 text-white">
                        <li style = {{"fontSize" : "20px"}}>SUPPORT</li><br></br>
                        {
                            this.state.company.map((name) => {
                               return (
                                <li style = {{"fontSize" : "10px"}}>{name}</li>
                               );
                            })
                        }
                    </ul>
                    </div>
                    <div className = "m-5">
                    <ul style = {{listStyle: "none"}} className = "ml-5 text-white">
                        <li style = {{"fontSize" : "20px"}}>LEGAL</li><br></br>
                        {
                            this.state.company.map((name) => {
                               return (
                                <li style = {{"fontSize" : "10px"}}>{name}</li>
                               );
                            })
                        }
                    </ul>
                    </div>
                </div>    
                
            </div>
        );
    }
}

                    
                