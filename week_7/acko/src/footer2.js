import React from 'react';
import logo from './logo.svg';
import './App.css';
export default class Footer2 extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            list: [
                "Insurance Sector In India",
                "Types Of Insurance",
                "Indian Motor Vehicles Act 2017",
                "About Your Vehicle Number Plate",
                "Things To Know About PUC Certificate",
                "Vehicle Registration & Re-Registration",
                "Intro To Road Tax In Uttar Pradesh",
            ]
        }
    }
    render () {
        return (
            <div>
               <div style = {{background: "#303030", height: "300px"}} className = "w-100 d-flex justify-content-around">
                   <div className = "m-5 w-25">
                       <p style = {{color: "white"}}>We’re Socially Active</p>
                   </div>
               <div className = "m-5">
                    <ul style = {{listStyle: "none"}} className = "ml-5 text-white">
                        <li style = {{"fontSize" : "20px"}}>General</li><br></br>
                        {
                            this.state.list.map((name) => {
                               return (
                                <li style = {{"fontSize" : "10px"}}>{name}</li>
                               );
                            })
                        }
                    </ul>
                    </div>
                    <div className = "m-5">
                    <ul style = {{listStyle: "none"}} className = "ml-5 text-white">
                        <li style = {{"fontSize" : "20px"}}>Car Insurance</li><br></br>
                        {
                            this.state.list.map((name) => {
                               return (
                                <li style = {{"fontSize" : "10px"}}>{name}</li>
                               );
                            })
                        }
                    </ul>
                    </div>
                    <div className = "m-5">
                    <ul style = {{listStyle: "none"}} className = "ml-5 text-white">
                        <li style = {{"fontSize" : "20px"}}>Two-Wheeler Insurance</li><br></br>
                        {
                            this.state.list.map((name) => {
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