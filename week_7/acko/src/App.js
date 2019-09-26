import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './navbar.js';
import Header from './headerImage.js';
import Footer from './footer.js';
import Footer2 from './footer2.js';
import Price from './price.js';
import Claim from './claim.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Claim />
      <Price />
      <Footer />
      <Footer2 />
    </div>
  );
}

export default App;
