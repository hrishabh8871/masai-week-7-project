import React from 'react';
import logo from './logo.svg';
import './App.css';
export default class Price extends React.Component {
    render () {
        return (
            <div>
                <div style = {{background: "#F2F2F5", height : "300px"}} className = "w-100">
                 <div style = {{alignContent: "center"}}>
                   <div className = "p-5">
                   <p>Ready To Buy Insurance?</p>
                    <p className = "display-4">View Personalized Car Insurance Prices.</p>
                    <button style = {{background: "#30CE91"}} className = "btn w-25">View Prices</button>
                   </div>
                 </div>
                </div>
            </div>
        )
    }
}